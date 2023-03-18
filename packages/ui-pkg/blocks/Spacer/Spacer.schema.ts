import { defineField, defineType } from "sanity";
import { SelectionProps } from "sanity-app/types/Selection";
import { SPACER_OPTIONS } from "../../constants/SPACER_OPTIONS";

export default defineType({
  type: "object",
  name: "Spacer",
  title: "Spacer",
  fields: [
    defineField({
      name: "height",
      title: "Height",
      type: "string",
      description: "Defaults to single",
      options: {
        list: SPACER_OPTIONS,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      subtitle: "height",
    },
    prepare(selection: SelectionProps) {
      const { subtitle } = selection;
      return {
        title: "Spacer",
        subtitle: subtitle || "",
      };
    },
  },
});
