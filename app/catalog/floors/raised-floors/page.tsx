import { safeFetch } from "@/sanity/lib/client";
import { galleryGroupQuery } from "@/sanity/lib/queries";
import type { GalleryGroup } from "@/sanity/lib/types";
import RaisedFloorsContent from "./RaisedFloorsContent";

export const revalidate = 60;

export default async function RaisedFloorsPage() {
  const gallery = await safeFetch<GalleryGroup | null>(
    galleryGroupQuery,
    { section: "raisedFloors" },
    null
  );
  return <RaisedFloorsContent images={gallery?.images ?? []} />;
}
