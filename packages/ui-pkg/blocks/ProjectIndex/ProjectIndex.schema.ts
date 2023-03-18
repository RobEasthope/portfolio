import { defineField, defineType } from "sanity";

export default defineType({
  name: "ProjectIndex",
  title: "Project index",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Portfolio section title",
      type: "string",
    }),
    defineField({
      name: "index",
      title: "Index",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
