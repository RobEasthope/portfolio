import React from 'react';
import { Meta, Story as StoryProps } from '@storybook/react';
import { ExampleSection as ExampleSectionProps } from '@/UI/types/sanity-schema';
import { capitalizeFirstLetter } from '@/STORYBOOK/utils/capitalizeFirstLetter';

import { CenterComponent } from '@/STORYBOOK/components/CenterComponent';
import { EXAMPLE_TEXT } from '@/STORYBOOK/mock-data/SANITY_TEXT';
import { StoryFauxProps } from '@/STORYBOOK/types/storybook';
import { ExampleSection } from './ExampleSection';

export default {
  title: 'Sections/ExampleSection',
  component: ExampleSection,
  decorators: [
    (Story) => (
      <CenterComponent>
        <Story />
      </CenterComponent>
    ),
  ],
} as Meta;

const Template: StoryProps<ExampleSectionProps> = (args) => (
  <ExampleSection {...args} />
);

// Vanilla
export const Vanilla = Template.bind({}) as StoryFauxProps;

Vanilla.args = {
  heading: capitalizeFirstLetter(
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum arcu a tellus elementum, id fermentum eros ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec iaculis est a varius luctus. Nunc vitae condimentum risus, eget convallis massa. Fusce eu nisi a libero rhoncus vehicula ac ac lacus. Maecenas vel libero enim. Integer eros nibh, fermentum eu arcu in, dapibus scelerisque enim. Cras sodales auctor massa, quis tristique nisl rhoncus sodales. Nunc quis congue arcu. Pellentesque rutrum tincidunt libero vel faucibus. '
  ),
  text: EXAMPLE_TEXT,
};

// No data
export const NoData = Template.bind({}) as StoryFauxProps;
NoData.args = {};
