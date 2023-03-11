export default {
  name: "altImage",
  title: "Image",
  type: "object",
  fields: [
    {
      name: "imageAsset",
      title: "Asset",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "altText",
      title: "Alt text",
      type: "string",
      validation: (Rule) => Rule.required().warning("Required field"),
    },
  ],
};
