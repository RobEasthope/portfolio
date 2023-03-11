import { defineField, defineType } from "sanity";

export default defineType({
  name: "Header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "rawNavigationLeft",
      title: "Navigation (Left)",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("No navigation links have been added"),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("Logo is missing"),
    },
    {
      name: "rawNavigationRight",
      title: "Navigation (Right)",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("No navigation links have been added"),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Header",
      };
    },
  },
});
