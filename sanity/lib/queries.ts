export const homeSliderQuery = `*[_type == "homeSlider"][0]{
  images[]{
    ..., asset->
  }
}`;

export const categoryImagesQuery = `*[_type == "categoryImage"]{
  _id, section,
  image{ ..., asset-> }
}`;

export const floorSubcategoryImagesQuery = `*[_type == "floorSubcategoryImage"]{
  _id, slot,
  image{ ..., asset-> }
}`;

export const carpetTileCollectionsQuery = `*[_type == "carpetTileCollection" && brand == $brand] | order(order asc, name asc){
  _id, name, brand, order,
  images[]{ ..., asset-> }
}`;

export const partitionImagesQuery = `*[_type == "partitionImage" && brand == $brand]{
  _id, slot, brand,
  images[]{ ..., asset-> }
}`;

export const galleryGroupQuery = `*[_type == "galleryGroup" && section == $section][0]{
  images[]{ ..., asset-> }
}`;

export const projectsQuery = `*[_type == "projectGallery"] | order(order asc, year desc){
  _id, title, year, description, solutions, order,
  image{ ..., asset-> }
}`;

export const clientLogosQuery = `*[_type == "clientLogo"] | order(order asc, name asc){
  _id, name,
  logo{ ..., asset-> }
}`;
