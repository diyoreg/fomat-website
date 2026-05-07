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
  title: "Перегородки — изображения раздела",
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
      description: "Какому блоку соответствует этот документ",
      type: "string",
      options: { list: SLOT_OPTIONS, layout: "radio" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Изображения",
      description:
        "Несколько фото — будут листаться слайдером в карточке раздела на /catalog/partitions",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt-текст", type: "string" }],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: { slot: "slot", brand: "brand", images: "images", media: "images.0" },
    prepare({ slot, brand, images, media }) {
      const slotLabel = SLOT_OPTIONS.find((s) => s.value === slot)?.title ?? slot;
      const brandLabel = BRAND_OPTIONS.find((b) => b.value === brand)?.title ?? brand;
      const count = Array.isArray(images) ? images.length : 0;
      return {
        title: slotLabel,
        subtitle: `${brandLabel} — ${count} фото`,
        media,
      };
    },
  },
});
