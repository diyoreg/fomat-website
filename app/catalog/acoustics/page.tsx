import { safeFetch } from "@/sanity/lib/client";
import { galleryGroupQuery } from "@/sanity/lib/queries";
import type { GalleryGroup } from "@/sanity/lib/types";
import AcousticsContent from "./AcousticsContent";

export const revalidate = 60;

export default async function AcousticsPage() {
  const gallery = await safeFetch<GalleryGroup | null>(
    galleryGroupQuery,
    { section: "acoustics" },
    null
  );
  return <AcousticsContent images={gallery?.images ?? []} />;
}
