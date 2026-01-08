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
      name: "heroBackgroundImage",
      title: "Hero Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ]
});
