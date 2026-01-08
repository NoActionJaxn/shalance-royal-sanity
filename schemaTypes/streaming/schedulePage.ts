import { defineType } from "sanity";
import { pageIds } from "../../constants/pageIds";

export default defineType({
  name: pageIds.STREAMING_SCHEDULE_PAGE,
  title: "Streaming Schedule Page",
  type: "document",
  fields: [
    {
      name: "seo",
      title: "Search Engine Optimization (SEO)",
      type: "seo",
    },
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
      ],
    },
  ]
});
