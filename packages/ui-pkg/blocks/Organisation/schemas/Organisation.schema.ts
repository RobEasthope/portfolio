import { defineField, defineType } from "sanity";

export default defineType({
  name: "organisation",
  title: "Organisation",
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
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "hiddenOrg",
      title: "Hide organisation",
      descript: "Hides organisation on frontend",
      type: "boolean",
    }),
  ],
  initialValue: {
    hiddenOrg: false,
  },
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
});
