"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useMemo, useState } from "react";

import SanityImage from "@/components/ui/SanityImage";
import type { SanityImage as SanityImageType } from "@/sanity/lib/types";

type Props = {
  images: SanityImageType[];
  aspect?: string;
  className?: string;
  delay?: number;
  showDots?: boolean;
  priority?: boolean;
};

export default function AutoSlider({
  images,
  aspect = "aspect-[4/3]",
  className = "",
  delay = 4500,
  showDots = true,
  priority = false,
}: Props) {
  // Embla loop with fewer than 4 slides renders clones incorrectly
  // (visual duplicates appear on adjacent positions). Fix per official
  // Embla guidance: duplicate the slide array internally to reach >=4.
  const slides = useMemo(() => {
    if (images.length === 0) return [];
    if (images.length < 4) return [...images, ...images];
    return images;
  }, [images]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi || images.length === 0) return;
    setSelectedIndex(emblaApi.selectedScrollSnap() % images.length);
  }, [emblaApi, images.length]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!images?.length) return null;

  return (
    <div className={`relative ${className}`}>
      <div className={`overflow-hidden rounded-sm ${aspect}`} ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((img, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
              <SanityImage
                image={img}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={priority && i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Слайд ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === selectedIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
