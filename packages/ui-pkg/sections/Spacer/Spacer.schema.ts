import { defineField, defineType } from "sanity";
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
      height: "height",
    },
    prepare({ height }) {
      return {
        title: "Spacer",
        subtitle: height,
      };
    },
  },
});
