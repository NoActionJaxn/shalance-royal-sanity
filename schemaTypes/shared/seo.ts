import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: "common",
      title: "Common SEO Fields",
      type: "commonSeoFields",
    }),
    defineField({
      name: "twitter",
      title: "Twitter SEO Fields",
      type: "twitterSeoFields",
    }),
    defineField({
      name: "openGraph",
      title: "Open Graph SEO Fields",
      type: "openGraphSeoFields",
    }),
  ]
});

export const commonSeoFields = defineType({
  name: "commonSeoFields",
  title: "Common SEO Fields",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "Meta Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
    }),
    defineField({
      name: "keywords",
      title: "Meta Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "canonicalURL",
      title: "Canonical URL",
      type: "url",
    })
  ],
});

export const twitterSeoFields = defineType({
  name: "twitterSeoFields",
  title: "Twitter SEO Fields",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: "twitterTitle",
      title: "Twitter Title",
      type: "string",
    }),
    defineField({
      name: "twitterDescription",
      title: "Twitter Description",
      type: "text",
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter URL",
      type: "url",
    }),
    defineField({
      name: "twitterImage",
      title: "Twitter Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "twitterCard",
      title: "Twitter Card",
      type: "string",
      options: {
        list: [
          { title: "Summary", value: "summary" },
          { title: "Summary with Large Image", value: "summary_large_image" },
          { title: "App", value: "app" },
          { title: "Player", value: "player" },
        ],
        layout: "radio",
      },
      initialValue: "summary_large_image",
    }),
  ]
});

export const openGraphSeoFields = defineType({
  name: "openGraphSeoFields",
  title: "Open Graph SEO Fields",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: "ogTitle",
      title: "Open Graph Title",
      type: "string",
    }),
    defineField({
      name: "ogDescription",
      title: "Open Graph Description",
      type: "text",
    }),
    defineField({
      name: "ogUrl",
      title: "Open Graph URL",
      type: "url",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ogSiteName",
      title: "Open Graph Site Name",
      type: "string",
      initialValue: "Alcyon Shield",
    }),
    defineField({
      name: "ogType",
      title: "Open Graph Type",
      type: "string",
      options: {
        list: [
          { title: "Website", value: "website" },
          { title: "Article", value: "article" },
          { title: "Profile", value: "profile" },
        ],
        layout: "radio",
      },
      initialValue: "website",
    }),
  ]
});
