import { faker } from "@faker-js/faker";
import { StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Content/Text",
  component: Text,
};

export const Vanilla: StoryObj<TextProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
