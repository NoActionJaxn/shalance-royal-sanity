import { defineField, defineType } from "sanity";

export default defineType({
  name: "wrestlingEmailList",
  title: "Email List",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
  ],
});
