import { defineField, defineType } from "sanity";
import { pageIds } from "../../constants/pageIds";

export default defineType({
  name: pageIds.WRESTLING_SITE_SETTINGS_PAGE,
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
    defineField({
      name: "logo",
      title: "Site Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "alternateLogo",
      title: "Alternative Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        defineField({
          name: "menuItem",
          type: "cta",
        }),
      ],
    }),
    defineField({
      name: "socialNetworkItems",
      title: "Social Network Items",
      type: "array",
      of: [
        defineField({
          name: "socialNetworkItem",
          type: "cta",
        }),
      ],
    }),
  ],
});
