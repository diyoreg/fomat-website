import { defineField, defineType } from "sanity";

export const clientLogo = defineType({
  name: "clientLogo",
  title: "Логотип клиента",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Название клиента",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Логотип (желательно прозрачный PNG/SVG)",
      type: "image",
      options: { hotspot: false },
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
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
