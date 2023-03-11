import { defineField, defineType } from "sanity";
import { RiVideoLine } from "react-icons/ri";
import { MAX_CONTENT_OPTIONS } from "../../constants/MAX_CONTENT_OPTIONS";

export default defineType({
  type: "object",
  name: "MuxVideo",
  title: "Mux video",
  icon: RiVideoLine,
  fields: [
    defineField({
      name: "rawMuxVideo",
      title: "Mux video",
      type: "mux.video",
      validation: (Rule) => Rule.required().error("Mux video: Video is missing"),
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
    select: {},
    prepare() {
      return {
        title: "Mux video",
      };
    },
  },
});
