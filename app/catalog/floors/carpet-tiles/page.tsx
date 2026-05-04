import { safeFetch } from "@/sanity/lib/client";
import { carpetTileCollectionsQuery } from "@/sanity/lib/queries";
import type { CarpetTileCollection } from "@/sanity/lib/types";
import CarpetTilesContent from "./CarpetTilesContent";

export const revalidate = 60;

export default async function CarpetTilesPage() {
  const [shaw, fomat] = await Promise.all([
    safeFetch<CarpetTileCollection[]>(carpetTileCollectionsQuery, { brand: "shaw" }, []),
    safeFetch<CarpetTileCollection[]>(carpetTileCollectionsQuery, { brand: "fomat" }, []),
  ]);
  return <CarpetTilesContent shawCollections={shaw} fomatCollections={fomat} />;
}
