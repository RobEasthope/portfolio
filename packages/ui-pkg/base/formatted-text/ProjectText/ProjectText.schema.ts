export default defineType({
  name: "ProjectText",
  title: "Article text",
  type: "array",
  of: [
    {
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
        annotations: [{ type: "InternalLink" }, { type: "ExternalLink" }],
      },
    },
    { type: "Gallery" },
    { type: "Image" },
    { type: "MuxVideo" },
    { type: "VimeoVideo" },
    { type: "YoutubeVideo" },
  ],
});
