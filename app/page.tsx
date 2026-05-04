import { safeFetch } from "@/sanity/lib/client";
import { categoryImagesQuery, homeSliderQuery } from "@/sanity/lib/queries";
import { indexBySection } from "@/sanity/lib/types";
import type { CategoryImageDoc, HomeSlider } from "@/sanity/lib/types";
import HomeContent from "./HomeContent";

export const revalidate = 60;

export default async function HomePage() {
  const [slider, categoryDocs] = await Promise.all([
    safeFetch<HomeSlider | null>(homeSliderQuery, {}, null),
    safeFetch<CategoryImageDoc[]>(categoryImagesQuery, {}, []),
  ]);
  return (
    <HomeContent
      sliderImages={slider?.images ?? []}
      categoryImages={indexBySection(categoryDocs)}
    />
  );
}
