import { StoryObj } from "@storybook/react";
import { YoutubeVideo, YoutubeVideoProps } from "./YoutubeVideo";

export default {
  title: "Content/Youtube video",
  component: YoutubeVideo,
};

export const Vanilla: StoryObj<YoutubeVideoProps> = {
  args: {
    url: "https://www.youtube.com/watch?v=XJATRUfyJ7Y",
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
