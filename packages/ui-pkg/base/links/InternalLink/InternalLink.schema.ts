import { defineField, defineType } from "sanity";
import React from "react";
import { ALL_PAGES_TYPES } from "ui-pkg/pages/ALL_PAGES_TYPES";
import { RiLinksLine } from "react-icons/ri";

// const InternalLinkRender = ({ children }) => (
//   <span>
//     {children} <RiLinksLine />
//   </span>
// );

export default defineType({
  name: "InternalLink",
  title: "Internal link",
  type: "object",
  description: "Link to a page on the site",
  icon: RiLinksLine,
  fields: [
    defineField({
      name: "internalUID",
      title: "Page",
      type: "reference",
      to: ALL_PAGES_TYPES,

      validation: (Rule) => Rule.required(),
    }),
  ],
  // blockEditor: {
  //   icon: () => "🔗",
  //   render: InternalLinkRender,
  // },
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: "Internal link",
      };
    },
  },
});
