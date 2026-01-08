import { defineType, defineField } from "sanity";
import { pageIds } from "../../constants/pageIds";

export default defineType({
  name: pageIds.WRESTLING_GALLERY_PAGE,
  title: "Gallery Page",
  type: "document",
  fields: [
    defineField({
      name: "seo",
      title: "Search Engine Optimization (SEO)",
      type: "seo",
    }),
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [
        defineField({
          name: "galleryImage",
          title: "Gallery Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ]
});
