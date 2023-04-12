import { defineField, defineType } from "sanity";
import { SelectionProps } from "sanity-app/types/Selection";
import { ALL_PAGE_TYPES } from "ui-pkg/base/InternalLink/ALL_PAGE_TYPES";

export default defineType({
  name: "Error404NavCard",
  title: "Error 404 Navigation Card",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required().error("Logo is missing"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "internalUID",
      title: "Page",
      type: "reference",
      to: ALL_PAGE_TYPES,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare(selection: SelectionProps) {
      const { title } = selection;
      return {
        title: title || "Error 404 card",
        subtitle: title ? "Error 404 card" : "",
      };
    },
  },
});