import { defineField, defineType } from "sanity";
import { pageIds } from "../../constants/pageIds";

export default defineType({
  name: pageIds.WRESTLING_ABOUT_PAGE,
  title: "About Page",
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
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
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