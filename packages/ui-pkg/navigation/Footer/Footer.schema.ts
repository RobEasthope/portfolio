import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "Footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "rawFooterNavigation",
      title: "Footer navigation",
      type: "array",
      of: [
        defineArrayMember({ type: "InternalLinkWithTitle" }),
        defineArrayMember({ type: "ExternalLinkWithTitle" }),
        defineArrayMember({ type: "EmailLinkWithTitle" }),
      ],
      validation: (Rule) =>
        Rule.required().error("No footer navigation links have been added"),
    }),
    defineField({
      name: "bhpaLogo",
      title: "BHPA logo",
      type: "image",
      validation: (Rule) => Rule.required().error("BHPA logo is missing"),
    }),
    defineField({
      name: "bhpaWebsiteUrl",
      title: "BHPA website",
      type: "url",
      validation: (Rule) => Rule.required().error("BHPA website link is missing"),
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright text",
      type: "string",
      description: "The current year will be added automatically",
      validation: (Rule) => Rule.required().error("No copyright text has been added"),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
});
