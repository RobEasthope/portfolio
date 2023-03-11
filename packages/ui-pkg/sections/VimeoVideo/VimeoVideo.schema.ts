import { defineField, defineType } from "sanity";
import { RiVimeoFill } from "react-icons/ri";
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
      url: "url",
    },
    prepare({ url }) {
      return {
        title: "Vimeo video",
        subtitle: url,
      };
    },
  },
});
