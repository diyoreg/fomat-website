import type { SchemaTypeDefinition } from "sanity";

import { homeSlider } from "./homeSlider";
import { categoryImage } from "./categoryImage";
import { floorSubcategoryImage } from "./floorSubcategoryImage";
import { carpetTileCollection } from "./carpetTileCollection";
import { lvtCollection } from "./lvtCollection";
import { partitionImage } from "./partitionImage";
import { galleryGroup } from "./galleryGroup";
import { projectGallery } from "./projectGallery";
import { clientLogo } from "./clientLogo";

export const schemaTypes: SchemaTypeDefinition[] = [
  homeSlider,
  categoryImage,
  floorSubcategoryImage,
  carpetTileCollection,
  lvtCollection,
  partitionImage,
  galleryGroup,
  projectGallery,
  clientLogo,
];
