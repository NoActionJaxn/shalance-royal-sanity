import { defineField, defineType } from "sanity";

export default defineType({
  name: "wrestlingNewsletter",
  title: "Newsletter",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
