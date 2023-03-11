import { defineField, defineType } from "sanity";
import React from "react";
import { ALL_PAGES_TYPES } from "ffa-sanity/constants/ALL_PAGES_TYPES";
import { RiLinksLine } from "react-icons/ri";

const InternalLinkRender = ({ children }) => (
  <span>
    {children} <RiLinksLine />
  </span>
);

export default defineType({
  name: "InternalLinkWithTitle",
  title: "Internal link",
  type: "object",
  description: "Link to a document on the site",
  icon: RiLinksLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "internalUID",
      title: "Page",
      type: "reference",
      to: ALL_PAGES_TYPES,

      validation: (Rule) => Rule.required(),
    }),
  ],
  blockEditor: {
    icon: () => "🔗",
    render: InternalLinkRender,
  },
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        subtitle: "Internal link",
      };
    },
  },
});
