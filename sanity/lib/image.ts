import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { client } from "./client";
import { dataset, projectId } from "../env";

const builder = client
  ? createImageUrlBuilder(client)
  : createImageUrlBuilder({ projectId: projectId || "placeholder", dataset });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
