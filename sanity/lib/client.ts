import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, projectId, sanityConfigured } from "../env";

export const client: SanityClient | null = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

export async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T
): Promise<T> {
  if (!client) return fallback;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.error("[sanity] fetch failed", err);
    return fallback;
  }
}
