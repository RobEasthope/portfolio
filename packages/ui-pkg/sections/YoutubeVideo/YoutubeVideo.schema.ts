import { RiYoutubeFill } from "react-icons/ri";
import { MAX_CONTENT_OPTIONS } from "../../constants/MAX_CONTENT_OPTIONS";

export default defineType({
  type: "object",
  name: "YoutubeVideo",
  title: "YouTube video",
  icon: RiYoutubeFill,
  fields: [
    {
      name: "url",
      title: "Youtube URL",
      type: "string",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
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
      url: "url",
    },
    prepare({ url }) {
      return {
        title: "Youtube video",
        subtitle: url,
      };
    },
  },
});
