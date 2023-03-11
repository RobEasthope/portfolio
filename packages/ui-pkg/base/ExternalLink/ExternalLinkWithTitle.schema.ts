import { defineField, defineType } from "sanity";
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

// const ExternalLinkRender = ({ children }) => (
//   <span>
//     {children} <RiExternalLinkLine />
//   </span>
// );

export default defineType({
  name: "ExternalLinkWithTitle",
  title: "External link",
  type: "object",
  description: "Add a link to outside the site",
  icon: RiExternalLinkLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    }),
  ],
  // blockEditor: {
  //   icon: () => "🔗",
  //   render: ExternalLinkRender,
  // },
  preview: {
    select: {
      title: "title",
    },
    prepare(selection: { title: string }) {
      const { title } = selection;
      return {
        title,
        subtitle: "External link",
      };
    },
  },
});
