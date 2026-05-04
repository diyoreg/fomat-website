import { defineField, defineType } from "sanity";

export const carpetTileCollection = defineType({
  name: "carpetTileCollection",
  title: "Коллекция ковровой плитки",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Название коллекции",
      description: "Например: Foundry, Outline, Equilibrium и т.д.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Бренд",
      type: "string",
      options: {
        list: [
          { title: "Shaw Contract", value: "shaw" },
          { title: "FOMAT", value: "fomat" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Порядок отображения",
      description: "Меньше = выше в списке",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "images",
      title: "Изображения коллекции",
      description: "Несколько фото — будут листаться слайдером в карточке коллекции",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt-текст", type: "string" },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  orderings: [
    {
      title: "По порядку",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", brand: "brand", images: "images", media: "images.0" },
    prepare({ title, brand, images, media }) {
      const brandLabel = brand === "shaw" ? "Shaw Contract" : "FOMAT";
      return {
        title,
        subtitle: `${brandLabel} — ${images?.length ?? 0} фото`,
        media,
      };
    },
  },
});
