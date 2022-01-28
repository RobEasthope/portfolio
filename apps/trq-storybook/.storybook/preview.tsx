import React from 'react';
import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';
import { IdProvider } from '@radix-ui/react-id';
import { globalStyles } from '../../../packages/ui/styles/globalStyles';

addDecorator(withPerformance);

export const decorators = [
  (Story) => (
    <IdProvider>
      {globalStyles()}
      <Story />
    </IdProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}