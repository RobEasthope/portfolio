import { StoryObj } from "@storybook/react";
import { VimeoVideo, VimeoVideoProps } from "./VimeoVideo";

export default {
  title: "Content/Vimeo video",
  component: VimeoVideo,
};

export const Vanilla: StoryObj<VimeoVideoProps> = {
  args: {
    url: "https://vimeo.com/122375452",
  },
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
