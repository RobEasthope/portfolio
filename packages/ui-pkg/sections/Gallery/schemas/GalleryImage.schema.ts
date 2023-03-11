import { RiImage2Line } from "react-icons/ri";

export default defineType({
  type: "object",
  name: "GalleryImage",
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
