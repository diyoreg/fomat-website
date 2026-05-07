import type { Image } from "sanity";

export type SanityImage = Image & {
  alt?: string;
  asset: {
    _ref: string;
    _type: string;
    _id?: string;
    url?: string;
    metadata?: {
      dimensions?: { width: number; height: number; aspectRatio: number };
      lqip?: string;
    };
  };
};

export type HomeSlider = {
  images?: SanityImage[];
};

export type CarpetTileCollection = {
  _id: string;
  name: string;
  brand: "shaw" | "fomat";
  order?: number;
  images?: SanityImage[];
};

export type PartitionSlot = "partitions" | "doors" | "pods";
export type PartitionBrand = "jeb" | "fomat";

export type PartitionImageDoc = {
  _id: string;
  slot: PartitionSlot;
  brand: PartitionBrand;
  images?: SanityImage[];
};

export type GalleryGroup = {
  images?: SanityImage[];
};

export type ProjectDoc = {
  _id: string;
  title: string;
  year?: number;
  description?: string;
  solutions?: string[];
  order?: number;
  image: SanityImage;
};

export type ClientLogoDoc = {
  _id: string;
  name: string;
  logo: SanityImage;
};

export type CategorySection = "floors" | "acoustics" | "partitions" | "lights";

export type CategoryImageDoc = {
  _id: string;
  section: CategorySection;
  image: SanityImage;
};

export type CategoryImageMap = Partial<Record<CategorySection, SanityImage>>;

export function indexBySection(docs: CategoryImageDoc[]): CategoryImageMap {
  const map: CategoryImageMap = {};
  for (const doc of docs) {
    if (doc.section && doc.image) map[doc.section] = doc.image;
  }
  return map;
}

export type FloorSlot = "raisedFloors" | "carpetTiles" | "lvt";

export type FloorSubcategoryImageDoc = {
  _id: string;
  slot: FloorSlot;
  image: SanityImage;
};

export type FloorSlotMap = Partial<Record<FloorSlot, SanityImage>>;

export function indexBySlot(docs: FloorSubcategoryImageDoc[]): FloorSlotMap {
  const map: FloorSlotMap = {};
  for (const doc of docs) {
    if (doc.slot && doc.image) map[doc.slot] = doc.image;
  }
  return map;
}
