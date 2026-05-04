"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
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
          {images.map((img, i) => (
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

      {showDots && scrollSnaps.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {scrollSnaps.map((_, i) => (
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
