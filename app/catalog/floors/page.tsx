import { safeFetch } from "@/sanity/lib/client";
import { floorSubcategoryImagesQuery } from "@/sanity/lib/queries";
import { indexBySlot } from "@/sanity/lib/types";
import type { FloorSubcategoryImageDoc } from "@/sanity/lib/types";
import FloorsContent from "./FloorsContent";

export const revalidate = 60;

export default async function FloorsPage() {
  const docs = await safeFetch<FloorSubcategoryImageDoc[]>(
    floorSubcategoryImagesQuery,
    {},
    []
  );
  return <FloorsContent slotImages={indexBySlot(docs)} />;
}
