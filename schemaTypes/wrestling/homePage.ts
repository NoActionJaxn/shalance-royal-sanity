import { defineField, defineType } from "sanity";
import { pageIds } from "../../constants/pageIds";

export default defineType({
  name: pageIds.WRESTLING_HOME_PAGE,
  title: "Home Page",
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
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
    }),
    defineField({
      name: "heroContent",
      title: "Hero Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "heroBackgroundImage",
      title: "Hero Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "accolades",
      title: "Accolades",
      type: "array",
      of: [{ type: "wrestlingAccolade" }],
    }),
  ]
});

export const wrestlingAccoladeType = defineType({
  name: "wrestlingAccolade",
  title: "Wrestling Accolade",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear()),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
  ],
})