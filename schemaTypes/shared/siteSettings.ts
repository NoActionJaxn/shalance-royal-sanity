import { defineField, defineType } from "sanity";
import { pageIds } from "../../constants/pageIds";

export default defineType({
  name: pageIds.ROOT_SITE_SETTINGS_PAGE,
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "seo",
      title: "Default Search Engine Optimization (SEO)",
      type: "seo",
    }),
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
