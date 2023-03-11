import { defineField, defineType } from "sanity";

export default defineType({
  name: "details",
  title: "Details",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email address",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["mailto"],
        }),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone number",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["tel"],
        }),
    }),
    defineField({
      name: "twitter",
      title: "Twitter profile",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn profile",
      type: "url",
    }),
    defineField({
      name: "github",
      title: "Github profile",
      type: "url",
    }),
    defineField({
      name: "portfolioUrl",
      title: "Portfolio URL",
      type: "url",
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
