import { defineType, defineArrayMember } from "sanity";
import { createBlockValidator } from "sanity-pills";

const articleTextValidator = createBlockValidator({
  required: false,
  noEmptyBlocks: true,
  validateLinks: true,
  styleRequired: true,
  noStackedMarks: true,
  noNewlines: true,
  noTerminatingWhitespace: true,
});

export default defineType({
  name: "ArticleText",
  title: "Article text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Large heading", value: "h2" },
        { title: "Medium heading", value: "h3" },
        { title: "Small heading", value: "h4" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          { type: "InternalLink" },
          { type: "ExternalLink" },
          { type: "EmailLink" },
        ],
      },
    }),
    defineArrayMember({ type: "Details" }),
    defineArrayMember({ type: "Gallery" }),
    defineArrayMember({ type: "Image" }),
    defineArrayMember({ type: "MuxVideo" }),
    defineArrayMember({ type: "Testimonials" }),
    defineArrayMember({ type: "VimeoVideo" }),
    defineArrayMember({ type: "YoutubeVideo" }),
  ],
  validation: articleTextValidator,
});
