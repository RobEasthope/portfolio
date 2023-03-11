import { defineField, defineType } from "sanity";
import * as dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortTitle",
      title: "Short title",
      type: "string",
      validation: (Rule) => Rule.required().warning("Required field"),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required().warning("Required field"),
    },
    {
      name: "pageSlug",
      title: "Project slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      readOnly: true,
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      description:
        "I keep six honest serving-men; (They taught me all I knew); Their names are What and Why and When; And How and Where and Who. - Rudyard Kipling",
    },
    {
      name: "projectText",
      title: "Text",
      type: "ProjectText",
      description:
        "I keep six honest serving-men; (They taught me all I knew); Their names are What and Why and When; And How and Where and Who. - Rudyard Kipling",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "showreel",
      title: "Showreel",
      type: "mux.video",
    },
    {
      name: "gallery",
      title: "Image gallery",
      type: "array",
      of: [{ type: "altImage" }],
    },
    {
      name: "client",
      title: "Client",
      type: "reference",
      to: { type: "organisation" },
    },
    {
      name: "agency",
      title: "Agency",
      type: "reference",
      to: { type: "organisation" },
    },
    {
      name: "date",
      title: "Date (Written form)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "startDate",
      title: "Start date",
      type: "date",
      options: {
        dateFormat: "DD-MMMM-YYYY",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End date",
      type: "date",
      options: {
        dateFormat: "DD-MMMM-YYYY",
      },
    },
    {
      name: "projectUrlTitle",
      title: "Project url title",
      type: "string",
    },
    {
      name: "projectUrl",
      title: "Project url",
      type: "url",
    },
    {
      name: "repoUrl",
      title: "Repo url",
      type: "url",
    },
    {
      name: "techUsed",
      title: "Technologies used",
      type: "array",
      of: [{ type: "reference", to: { type: "tech" } }],
    },
    {
      name: "thumbnailImage",
      title: "Thumbnail image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning("Required field"),
    },
  ],
  orderings: [
    {
      title: "Start Date, New",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
    {
      title: "Start Date, Old",
      name: "startDateAsc",
      by: [{ field: "startDate", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      clientName: "client.name",
      thumbnailImage: "thumbnailImage",
      startDate: "startDate",
      endDate: "endDate",
    },
    prepare({ startDate = null, endDate = null, title, thumbnailImage }) {
      dayjs.extend(advancedFormat);

      const formattedStartDate = dayjs.default(startDate).format("MMM Do YYYY");
      const formattedEndDate = dayjs.default(endDate).format("MMM Do YYYY");

      return {
        title,
        media: thumbnailImage,
        subtitle: `${formattedStartDate || "Date missing"} - ${
          endDate ? formattedEndDate : "Present"
        }`,
      };
    },
  },
});
