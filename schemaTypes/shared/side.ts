import { defineField, defineType } from "sanity";

export default defineType({
  name: "side",
  title: "Side",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "route",
      type: "cta",
    }),
    {
      type: 'color',
      name: 'backgroundColor',
      title: 'Background Color',
    },
    {
      type: 'color',
      name: 'textColor',
      title: 'Text Color',
    },
  ]
})