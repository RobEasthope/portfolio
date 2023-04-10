import { defineField, defineType } from "sanity";
import { SelectionProps } from "sanity-app/types/Selection";

export default defineType({
  name: "tech",
  title: "Tech",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().warning("Required field"),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required().warning("Required field"),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
    prepare(selection: SelectionProps) {
      const { title, media } = selection;
      return {
        title: title || "Tech",
        subtitle: title ? "Tech" : "",
        media,
      };
    },
  },
});
