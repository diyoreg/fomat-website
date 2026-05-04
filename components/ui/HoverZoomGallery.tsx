"use client";

import SanityImage from "@/components/ui/SanityImage";
import type { SanityImage as SanityImageType } from "@/sanity/lib/types";

type Props = {
  images: SanityImageType[];
  columns?: 2 | 3 | 4;
  fallbackBg?: string;
  fallbackLabel?: string;
};

export default function HoverZoomGallery({
  images,
  columns = 3,
  fallbackBg = "#22333b",
  fallbackLabel = "Фото будут добавлены",
}: Props) {
  if (!images?.length) {
    return (
      <div
        className="h-80 lg:h-96 rounded-sm flex items-center justify-center"
        style={{ backgroundColor: fallbackBg }}
      >
        <p className="text-[#e6e4d8]/40 text-sm tracking-wide">{fallbackLabel}</p>
      </div>
    );
  }

  const colsClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
        ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${colsClass} gap-4`}>
      {images.map((img, i) => (
        <div
          key={i}
          className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e6e4d8]"
        >
          <SanityImage
            image={img}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}
