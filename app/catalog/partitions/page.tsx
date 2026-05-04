import { safeFetch } from "@/sanity/lib/client";
import { partitionImagesQuery } from "@/sanity/lib/queries";
import type { PartitionImageDoc } from "@/sanity/lib/types";
import PartitionsContent from "./PartitionsContent";

export const revalidate = 60;

export default async function PartitionsPage() {
  const [jeb, fomat] = await Promise.all([
    safeFetch<PartitionImageDoc[]>(partitionImagesQuery, { brand: "jeb" }, []),
    safeFetch<PartitionImageDoc[]>(partitionImagesQuery, { brand: "fomat" }, []),
  ]);
  return <PartitionsContent jebImages={jeb} fomatImages={fomat} />;
}
