import { defineField, defineType } from "sanity";

const SECTION_OPTIONS = [
  { title: "Напольные покрытия", value: "floors" },
  { title: "Акустические решения", value: "acoustics" },
  { title: "Перегородки и двери", value: "partitions" },
  { title: "Освещение", value: "lights" },
];

export const categoryImage = defineType({
  name: "categoryImage",
  title: "Картинка категории",
  description:
    "Общее фото для карточки категории на главной и в каталоге. По одному документу на каждую из 4 категорий.",
  type: "document",
  fields: [
    defineField({
      name: "section",
      title: "Категория",
      type: "string",
      options: { list: SECTION_OPTIONS, layout: "radio" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Изображение",
      description:
        "Лучше выбирать фото с тёмными или средними тонами, чтобы белый текст карточки оставался читаемым.",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt-текст", type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { section: "section", media: "image" },
    prepare({ section, media }) {
      const title = SECTION_OPTIONS.find((s) => s.value === section)?.title ?? section;
      return { title, subtitle: "Картинка категории", media };
    },
  },
});
