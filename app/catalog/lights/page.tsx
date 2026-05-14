import { safeFetch } from "@/sanity/lib/client";
import { galleryGroupQuery } from "@/sanity/lib/queries";
import type { GalleryGroup } from "@/sanity/lib/types";
import LightsContent from "./LightsContent";

export const revalidate = 60;

export default async function LightsPage() {
  const gallery = await safeFetch<GalleryGroup | null>(
    galleryGroupQuery,
    { section: "lights" },
    null
  );
  return <LightsContent images={gallery?.images ?? []} />;
}
