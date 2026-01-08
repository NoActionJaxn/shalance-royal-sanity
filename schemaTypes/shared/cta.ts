import { defineField, defineType } from "sanity";

export const ctaType = defineType({
  name: "cta",
  title: "Call To Action",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({ 
      name: "label", 
      title: "Label", 
      type: "string", 
      validation: (r) => r.required() 
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      description: "Link target: either a full URL (https://...) or a site path (e.g. /home, /art).",
      validation: (Rule) =>
        Rule.required().custom((val) => {
          if (typeof val !== "string" || val.trim() === "") return "URL is required";
          const url = val.trim();
          const isAbsolute = /^https?:\/\//i.test(url);
          const isSitePath = /^\/[A-Za-z0-9._~:\/?#\[\]@!$&'()*+,;=\-]*$/.test(url);
          if (isAbsolute || isSitePath) return true;
          return "Enter a full URL (https://...) or a site path like /home";
        }),
    }),
    defineField({ 
      name: "openInNewTab", 
      title: "Open in new tab", 
      type: "boolean" 
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "fontAwesome",
      description: "Optional Font Awesome icon to display alongside the label.",
    }),
  ],
});
