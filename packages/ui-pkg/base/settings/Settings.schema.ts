import { defineField, defineType } from "sanity";
import { ALL_PAGES_TYPES } from "../../utils/sanity/ALL_PAGE_TYPES";

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
