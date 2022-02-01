import React from 'react';
import { SiStorybook } from 'react-icons/si';
import { BiText } from 'react-icons/bi';

export default {
  type: 'object',
  name: 'Text',
  title: 'Text',
  icon: BiText,
  fields: [
    {
      name: 'storybook',
      type: 'note',
      options: {
        icon: SiStorybook,
        message: (
          <a
            href="https://free-flight-academy-storybook.vercel.app/?path=/story/blocks-text--vanilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview in Storybook
          </a>
        ),
        tone: 'brand',
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'ArticleText',
      validation: (Rule) => Rule.required().warning('Text: Text is missing'),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Text',
      };
    },
  },
};
