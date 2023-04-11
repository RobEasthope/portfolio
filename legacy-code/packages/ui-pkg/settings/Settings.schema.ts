import { ALL_PAGES_TYPES } from "ui-pkg/pages/ALL_PAGES_TYPES";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "Settings",
  type: "document",
  title: "Site settings",
  fields: [
    defineField({
      name: "rawHomePageRef",
      title: "Home page",
      type: "reference",
      to: ALL_PAGES_TYPES,
      description: "Select home page (Critical requirement)",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
