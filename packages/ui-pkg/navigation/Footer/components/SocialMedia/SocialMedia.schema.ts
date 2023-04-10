import { defineField, defineType } from "sanity";

export default defineType({
  name: "SocialMedia",
  type: "document",
  title: "Social media",
  fields: [
    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "string",
      description: "Full Facebook URL",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "string",
      description: "Full Instagram URL",
    }),
    defineField({
      name: "youtube",
      title: "Youtube URL",
      type: "string",
      description: "Full Youtube URL",
    }),
    defineField({
      name: "vimeo",
      title: "Vimeo URL",
      type: "string",
      description: "Full Vimeo URL",
    }),
    defineField({
      name: "applePodcasts",
      title: "Apple Podcasts",
      type: "string",
      description: "Full Apple Podcasts URL",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Social media",
      };
    },
  },
});
