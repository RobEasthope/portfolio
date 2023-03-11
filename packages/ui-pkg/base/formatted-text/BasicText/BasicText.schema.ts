import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "BasicText",
  title: "Basic text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [{ type: "InternalLink" }, { type: "ExternalLink" }],
      },
    }),
  ],
});
