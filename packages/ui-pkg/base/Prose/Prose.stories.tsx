import { StoryObj } from "@storybook/react";
import { Prose, ProseProps } from "./Prose";

export default {
  title: "Base/Prose",
  component: Prose,
};

export const Vanilla: StoryObj<ProseProps> = {
  args: {},
};

export const NoContent: StoryObj<any> = {
  args: {},
};
