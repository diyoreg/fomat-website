import { defineField, defineType } from "sanity";

export const projectGallery = defineType({
  name: "projectGallery",
  title: "Реализованный проект",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название проекта",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Фотографии проекта",
      description:
        "Загрузите несколько фото — они будут листаться слайдером в карточке. Первое фото также появится в шапке страницы /projects.",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt-текст", type: "string" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "order",
      title: "Порядок отображения",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "По порядку", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", media: "images.0" },
    prepare({ title, media }) {
      return { title, media };
    },
  },
});
