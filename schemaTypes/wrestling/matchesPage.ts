import { defineType, defineField } from "sanity";
import { pageIds } from "../../constants/pageIds";

export default defineType({
  name: pageIds.WRESTLING_MATCHES_PAGE,
  title: "Matches Page",
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
      name: "matches",
      title: "Matches",
      type: "array",
      of: [
        defineField({
          name: "match",
          title: "Match",
          type: "wrestlingMatch",
        }),
      ],
    }),
  ]
});

export const wrestlingMatchType = defineType({
  name: "wrestlingMatch",
  title: "Wrestling Match",
  type: "object",
  fields: [
    defineField({
      name: "matchTitle",
      title: "Match Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "matchDate",
      title: "Match Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "matchDescription",
      title: "Match Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "matchImages",
      title: "Match Images",
      type: "array",
      of: [
        defineField({
          name: "image",
          title: "Match Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
});