import { defineField, defineType } from "sanity";

export default defineType({
  name: "Header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "rawNavigationLeft",
      title: "Navigation (Left)",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      validation: (Rule) => Rule.required().error("No navigation links have been added"),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required().error("Logo is missing"),
    }),
    defineField({
      name: "rawNavigationRight",
      title: "Navigation (Right)",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      validation: (Rule) => Rule.required().error("No navigation links have been added"),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Header",
      };
    },
  },
});
