import { defineField, defineType } from "sanity";
import { SelectionProps } from "sanity-app/types/Selection";

export default defineType({
  name: "ExampleSection",
  title: "Example block",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required().error("Example Section: Heading is missing"),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "ExampleFormattedText",
      validation: (Rule) => Rule.required().warning("Example section: Text is missing"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
        defineField({
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        }),
      ],
      validation: (Rule) =>
        Rule.required().warning("Example Section: Heading is missing"),
    }),
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare(selection: SelectionProps) {
      const { title, media } = selection;
      return {
        title: title || "Example block",
        subtitle: title ? "Example block" : "",
        media,
      };
    },
  },
});
