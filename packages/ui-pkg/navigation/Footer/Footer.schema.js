export default {
  name: "Footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "rawNavigation",
      title: "Footer navigation",
      type: "array",
      of: [{ type: "InternalLinkWithTitle" }, { type: "ExternalLinkWithTitle" }],
      codegen: { required: true },
      validation: (Rule) => Rule.required().error("No navigation links have been added"),
    },
    {
      name: "copyrightText",
      title: "Copyright text",
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
};
