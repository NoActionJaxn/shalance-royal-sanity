import { defineType, defineField } from "sanity";
import { pageIds } from "../../constants/pageIds";

export default defineType({
  name: pageIds.WRESTLING_EVENTS_PAGE,
  title: "Events Page",
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
      name: "upcomingEvents",
      title: "Upcoming Events",
      type: "array",
      of: [
        defineField({
          name: "event",
          title: "Event",
          type: "wrestlingEvent",
        }),
      ],
    }),
  ]
});

export const wrestlingEventType = defineType({
  name: "wrestlingEvent",
  title: "Wrestling Event",
  type: "object",
  fields: [
    defineField({
      name: "eventTitle",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eventStartDate",
      title: "Event Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eventEndDate",
      title: "Event End Date",
      type: "datetime",
    }),
    defineField({
      name: "eventLocation",
      title: "Event Location",
      type: "string",
    }),
    defineField({
      name: "eventDescription",
      title: "Event Description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
