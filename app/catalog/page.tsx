import { safeFetch } from "@/sanity/lib/client";
import { categoryImagesQuery } from "@/sanity/lib/queries";
import { indexBySection } from "@/sanity/lib/types";
import type { CategoryImageDoc } from "@/sanity/lib/types";
import CatalogContent from "./CatalogContent";

export const revalidate = 60;

export default async function CatalogPage() {
  const docs = await safeFetch<CategoryImageDoc[]>(categoryImagesQuery, {}, []);
  return <CatalogContent categoryImages={indexBySection(docs)} />;
}
