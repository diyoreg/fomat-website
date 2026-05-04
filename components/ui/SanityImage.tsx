import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { SanityImage as SanityImageType } from "@/sanity/lib/types";

type Props = {
  image: SanityImageType;
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export default function SanityImage({
  image,
  alt,
  width = 1200,
  height = 900,
  fill,
  sizes,
  className,
  priority,
}: Props) {
  if (!image?.asset) return null;

  const builder = urlFor(image).auto("format").quality(80);
  const src = fill
    ? builder.width(1600).url()
    : builder.width(width).height(height).fit("crop").url();

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt ?? image.alt ?? ""}
        fill
        sizes={sizes ?? "100vw"}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt ?? image.alt ?? ""}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}
