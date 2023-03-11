import { defineField, defineType } from "sanity";
import exampleSection from "../../sections/ExampleSection/ExampleSection.schema";
import Gallery from "../../sections/Gallery/Gallery.schema";
import Image from "../../sections/Image/Image.schema";
import LandingHero from "../../sections/LandingHero/LandingHero.schema";
import Spacer from "../../sections/Spacer/Spacer.schema";
import Text from "../../sections/Text/Text.schema";
import PageTitle from "../../sections/PageTitle/PageTitle.schema";
import ProjectIndex from "../../sections/ProjectIndex/ProjectIndex.schema";
import YoutubeVideo from "../../sections/YoutubeVideo/YoutubeVideo.schema";
import VimeoVideo from "../../sections/VimeoVideo/VimeoVideo.schema";

export default defineType({
  name: "Page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 30,
      },
      description: "Set the page URL",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rawSections",
      title: "Page sections",
      type: "array",
      of: [
        { type: exampleSection.name },
        { type: Gallery.name },
        { type: Image.name },
        { type: LandingHero.name },
        { type: PageTitle.name },
        { type: ProjectIndex.name },
        { type: Spacer.name },
        { type: Text.name },
        { type: VimeoVideo.name },
        { type: YoutubeVideo.name },
      ],
      validation: (Rule) =>
        Rule.required().min(1).error("At least one page section is required"),
    }),
    defineField({
      name: "metadataTitle",
      title: "Metadata title",
      description: "Used in browser tab titles and social media",
      type: "string",
      validation: (Rule) =>
        Rule.required().warning(
          "Metadata title has not been set and will fall back to global metadata settings"
        ),
    }),
    defineField({
      name: "metadataDescription",
      title: "Metadata description",
      description: "Used in social media and search engine listings",
      type: "text",
      validation: (Rule) =>
        Rule.required().warning(
          "Metadata description has not been set and will fall back to global metadata settings"
        ),
    }),
    defineField({
      name: "metadataImage",
      title: "Metadata image",
      description: "Used in social media and search engine listings.",
      type: "image",
      validation: (Rule) =>
        Rule.required().warning(
          "Metadata image has not been set and will fall back to global metadata settings"
        ),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
});
