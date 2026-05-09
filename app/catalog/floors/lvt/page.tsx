import { safeFetch } from "@/sanity/lib/client";
import { lvtCollectionsQuery } from "@/sanity/lib/queries";
import type { LvtCollection } from "@/sanity/lib/types";
import LvtContent from "./LvtContent";

export const revalidate = 60;

export default async function LvtPage() {
  const [shaw, fomat] = await Promise.all([
    safeFetch<LvtCollection[]>(lvtCollectionsQuery, { brand: "shaw" }, []),
    safeFetch<LvtCollection[]>(lvtCollectionsQuery, { brand: "fomat" }, []),
  ]);
  return <LvtContent shawCollections={shaw} fomatCollections={fomat} />;
}
