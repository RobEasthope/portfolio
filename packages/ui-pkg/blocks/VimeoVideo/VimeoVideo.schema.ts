import { defineField, defineType } from "sanity";
import { RiVimeoFill } from "react-icons/ri";
import { SelectionProps } from "sanity-app/types/Selection";
import { MAX_CONTENT_OPTIONS } from "../../constants/MAX_CONTENT_OPTIONS";

export default defineType({
  type: "object",
  name: "VimeoVideo",
  title: "Vimeo video",
  icon: RiVimeoFill,
  fields: [
    defineField({
      name: "url",
      title: "Vimeo URL",
      type: "string",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "maxWidth",
      title: "Max width",
      type: "string",
      description: "Defaults to large",
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
    }),
  ],
  preview: {
    select: {
      subtitle: "url",
    },
    prepare(selection: SelectionProps) {
      const { subtitle } = selection;
      return {
        title: "Vimeo video",
        subtitle: subtitle || "",
      };
    },
  },
});
