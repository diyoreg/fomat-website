import { defineField, defineType } from "sanity";

const SLOT_OPTIONS = [
  { title: "Перегородки", value: "partitions" },
  { title: "Двери", value: "doors" },
  { title: "PODS (только FOMAT)", value: "pods" },
];

const BRAND_OPTIONS = [
  { title: "JEB Group", value: "jeb" },
  { title: "FOMAT", value: "fomat" },
];

export const partitionImage = defineType({
  name: "partitionImage",
  title: "Перегородки — изображение раздела",
  type: "document",
  fields: [
    defineField({
      name: "brand",
      title: "Бренд",
      type: "string",
      options: { list: BRAND_OPTIONS, layout: "radio" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slot",
      title: "Раздел",
      description: "Какому блоку соответствует это изображение",
      type: "string",
      options: { list: SLOT_OPTIONS, layout: "radio" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Изображение",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt-текст", type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { slot: "slot", brand: "brand", media: "image" },
    prepare({ slot, brand, media }) {
      const slotLabel = SLOT_OPTIONS.find((s) => s.value === slot)?.title ?? slot;
      const brandLabel = BRAND_OPTIONS.find((b) => b.value === brand)?.title ?? brand;
      return { title: slotLabel, subtitle: brandLabel, media };
    },
  },
});
