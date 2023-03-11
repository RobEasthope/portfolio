import { defineField, defineType } from "sanity";
import { RiGalleryLine } from "react-icons/ri";
import { ASPECT_RATIOS } from "../../constants/ASPECT_RATIOS";
import { headingUI } from "../../utils/sanity/headingUI";
import { MAX_CONTENT_OPTIONS } from "../../constants/MAX_CONTENT_OPTIONS";

export default defineType({
  type: "object",
  name: "Gallery",
  title: "Gallery",
  icon: RiGalleryLine,
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "GalleryImage" }],
      validation: (Rule) =>
        Rule.required().warning("Gallery: No images have been added to the gallery"),
    }),
    defineField({
      name: "galleryCaption",
      title: "Gallery caption",
      type: "text",
    }),
    headingUI("Gallery layout"),
    defineField({
      name: "columns",
      title: "Number of columns",
      type: "string",
      description: "Number of columns at full size",
      options: {
        list: [
          { title: "One", value: "1" },
          { title: "Two", value: "2" },
          { title: "Three", value: "3" },
          { title: "Four", value: "4" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("Gallery: Please select the desired number of columns"),
    }),
    defineField({
      name: "aspectRatio",
      title: "Gallery aspect ratio",
      type: "number",
      options: {
        list: ASPECT_RATIOS,
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("Gallery: Please select an aspect ratio"),
    }),
    defineField({
      name: "maxWidth",
      title: "Max width",
      type: "string",
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare({ images }) {
      return {
        title: "Gallery",
        media: images[0].image,
      };
    },
  },
});
