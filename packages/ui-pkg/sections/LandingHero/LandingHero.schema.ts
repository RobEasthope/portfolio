import { defineField, defineType } from "sanity";
import { BiHeading } from "react-icons/bi";
import { headingUI } from "../../utils/sanity/headingUI";

export default defineType({
  type: "object",
  name: "LandingHero",
  title: "Landing hero",
  icon: BiHeading,
  fields: [
    headingUI("Foreground"),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),
    headingUI("Background"),
    defineField({
      name: "bkgMode",
      title: "Background mode",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("Landing hero: Background mode has not been set"),
    }),
    defineField({
      name: "bkgImage",
      title: "Background image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
      hidden: ({ parent }) => parent?.bkgMode !== "image",
    }),
    defineField({
      name: "rawMuxVideo",
      title: "Background video",
      type: "mux.video",
      hidden: ({ parent }) => parent?.bkgMode !== "video",
    }),
    defineField({
      name: "caption",
      title: "Background caption",
      type: "text",
      hidden: ({ parent }) => !parent?.bkgMode,
    }),
  ],
  preview: {
    select: {
      title: "bkgImage",
    },
    prepare({ title }: { title: string }) {
      return {
        title: "Landing hero",
        media: title,
      };
    },
  },
});
