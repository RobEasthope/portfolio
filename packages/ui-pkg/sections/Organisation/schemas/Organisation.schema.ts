export default defineType({
  name: "organisation",
  title: "Organisation",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().warning("Required field"),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "hiddenOrg",
      title: "Hide organisation",
      descript: "Hides organisation on frontend",
      type: "boolean",
    },
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
