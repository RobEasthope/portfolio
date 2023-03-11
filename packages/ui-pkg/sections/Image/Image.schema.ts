import { RiImage2Line } from "react-icons/ri";
import { ASPECT_RATIOS } from "../../constants/ASPECT_RATIOS";
import { MAX_CONTENT_OPTIONS } from "../../constants/MAX_CONTENT_OPTIONS";

export default {
  type: "object",
  name: "Image",
  title: "Image",
  icon: RiImage2Line,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
      validation: (Rule) => Rule.required().warning("Image: Image is missing"),
    },
    {
      name: "aspectRatio",
      title: "Image aspect ratio",
      type: "number",
      description: "Defaults to original image aspect ratio",
      options: {
        list: ASPECT_RATIOS,
        layout: "radio",
      },
    },
    {
      name: "maxWidth",
      title: "Max width",
      type: "string",
      description: "Defaults to large",
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
    },
  ],
  preview: {
    select: {
      caption: "image.caption",
      image: "image",
    },
    prepare({ caption, image }) {
      return {
        title: "Image",
        subtitle: caption || null,
        media: image,
      };
    },
  },
};