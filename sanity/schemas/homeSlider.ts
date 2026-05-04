import { defineField, defineType } from "sanity";

export const homeSlider = defineType({
  name: "homeSlider",
  title: "Слайдер на главной",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название (для админки)",
      type: "string",
      initialValue: "Главный слайдер",
      readOnly: true,
    }),
    defineField({
      name: "images",
      title: "Изображения слайдера",
      description:
        "Загрузите 3–10 фотографий. Они будут автоматически листаться на главной странице справа от заголовка.",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt-текст (для SEO)", type: "string" },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(20),
    }),
  ],
  preview: {
    select: { images: "images" },
    prepare({ images }) {
      return {
        title: "Слайдер на главной",
        subtitle: `${images?.length ?? 0} фото`,
      };
    },
  },
});
