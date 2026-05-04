import { defineField, defineType } from "sanity";

const SLOT_OPTIONS = [
  { title: "Фальшполы", value: "raisedFloors" },
  { title: "Ковровая плитка (Carpet Tiles)", value: "carpetTiles" },
  { title: "LVT — Люкс-Винил", value: "lvt" },
];

export const floorSubcategoryImage = defineType({
  name: "floorSubcategoryImage",
  title: "Картинка подкатегории напольных покрытий",
  description:
    "Одна картинка на каждую из 3 подкатегорий — отображается слева на карточке на странице /catalog/floors.",
  type: "document",
  fields: [
    defineField({
      name: "slot",
      title: "Подкатегория",
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
    select: { slot: "slot", media: "image" },
    prepare({ slot, media }) {
      const title = SLOT_OPTIONS.find((s) => s.value === slot)?.title ?? slot;
      return { title, subtitle: "Картинка подкатегории", media };
    },
  },
});
