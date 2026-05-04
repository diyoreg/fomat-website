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
      name: "year",
      title: "Год",
      type: "number",
      validation: (Rule) => Rule.min(2000).max(2100),
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "solutions",
      title: "Решения",
      description: "Например: Carpet Tiles, LVT, Перегородки",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "image",
      title: "Главное фото",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt-текст", type: "string" }],
      validation: (Rule) => Rule.required(),
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
    { title: "По году (сначала новые)", name: "yearDesc", by: [{ field: "year", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", year: "year", media: "image" },
    prepare({ title, year, media }) {
      return { title, subtitle: year ? String(year) : "", media };
    },
  },
});
