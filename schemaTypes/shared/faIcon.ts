import { defineField, defineType } from "sanity";

export const faIconType = defineType({
  name: "fontAwesome",
  title: "Font Awesome Icon",
  type: "object",
  fields: [
    defineField({
      name: "iconName",
      title: "Icon Name",
      type: "string",
      description: "Enter the Font Awesome icon name (e.g., 'faCoffee')",
    }),
    defineField({
      name: "iconStyle",
      title: "Icon Style",
      type: "string",
      options: {
        list: [
          { title: "Solid", value: "fas" },
          { title: "Regular", value: "far" },
          { title: "Brands", value: "fab" },
        ],
        layout: "dropdown",
      },
    }),
  ],
});
