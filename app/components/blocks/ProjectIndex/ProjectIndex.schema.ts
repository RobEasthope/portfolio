import { defineField, defineType } from "sanity";
import { SelectionProps } from "sanity-app/types/Selection";

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
      media: "image",
    },
    prepare(selection: SelectionProps) {
      const { title, media } = selection;
      return {
        title: title || "Project index",
        subtitle: title ? "Project index" : "",
        media,
      };
    },
  },
});
