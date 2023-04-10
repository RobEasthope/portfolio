import { defineField, defineType } from "sanity";
import { BiText } from "react-icons/bi";
import { SelectionProps } from "sanity-app/types/Selection";
import { blockPreview } from "sanity-pills";

export default defineType({
  type: "object",
  name: "Text",
  title: "Text",
  icon: BiText,
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "FullText",
      validation: (Rule) => Rule.required().warning("Text: Text is missing"),
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare(selection: SelectionProps) {
      const { title } = selection;
      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        title: blockPreview(title) || "Text",
        subtitle: title ? "Text" : "",
      };
    },
  },
});
