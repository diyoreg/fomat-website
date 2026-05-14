import { defineField, defineType } from "sanity";

const SECTION_OPTIONS = [
  { title: "Акустика", value: "acoustics" },
  { title: "Фальшполы", value: "raisedFloors" },
  { title: "Освещение", value: "lights" },
];

export const galleryGroup = defineType({
  name: "galleryGroup",
  title: "Галерея раздела",
  description: "Плоский список фото для разделов «Акустика», «Фальшполы» и «Освещение»",
  type: "document",
  fields: [
    defineField({
      name: "section",
      title: "Раздел",
      type: "string",
      options: { list: SECTION_OPTIONS, layout: "radio" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Изображения",
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
    select: { section: "section", images: "images", media: "images.0" },
    prepare({ section, images, media }) {
      const sectionLabel =
        SECTION_OPTIONS.find((s) => s.value === section)?.title ?? section;
      return {
        title: `Галерея: ${sectionLabel}`,
        subtitle: `${images?.length ?? 0} фото`,
        media,
      };
    },
  },
});
