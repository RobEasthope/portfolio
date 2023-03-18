import { defineField, defineType } from "sanity";
import { BiText } from "react-icons/bi";
import { SelectionProps } from "sanity-app/types/Selection";

export default defineType({
  type: "object",
  name: "PageTitle",
  title: "PageTitle",
  icon: BiText,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare(selection: SelectionProps) {
      const { title } = selection;
      return {
        title: selection.title || "Page title",
        subtitle: title ? "Page title" : "",
      };
    },
  },
});
