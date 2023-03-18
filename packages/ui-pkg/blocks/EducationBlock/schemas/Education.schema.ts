import { defineField, defineType } from "sanity";
import { SelectionProps } from "sanity-app/types/Selection";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required().warning("Required field"),
    }),
    defineField({
      name: "qualification",
      title: "Qualification",
      type: "string",
    }),
    defineField({
      name: "when",
      title: "When",
      type: "string",
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
        title: selection.title || "Education",
        subtitle: title ? "Education" : "",
        media,
      };
    },
  },
});
