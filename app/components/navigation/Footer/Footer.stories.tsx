import type { StoryObj } from '@storybook/react';

import type { FooterProps } from './Footer';
import { Footer } from './Footer';

export default {
  title: 'Navigation/Footer',
  component: Footer,
};

export const Vanilla: StoryObj<FooterProps> = {
  args: {},
};

// No data
export const NoContent: StoryObj<any> = {
  args: {},
};
