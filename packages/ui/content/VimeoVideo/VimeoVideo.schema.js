import React from 'react';
import { SiStorybook } from 'react-icons/si';
import { RiVimeoFill } from 'react-icons/ri';
import { MAX_CONTENT_OPTIONS } from '../../constants/MAX_CONTENT_OPTIONS';

export default {
  type: 'object',
  name: 'VimeoVideo',
  title: 'Vimeo video',
  icon: RiVimeoFill,
  fields: [
    {
      name: 'storybook',
      type: 'note',
      options: {
        icon: SiStorybook,
        message: (
          <a
            href="https://free-flight-academy-storybook.vercel.app/?path=/story/blocks-vimeo-video--vanilla"
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
      name: 'url',
      title: 'Vimeo URL',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'maxWidth',
      title: 'Max width',
      type: 'string',
      description: 'Defaults to large',
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare({ url }) {
      return {
        title: 'Vimeo video',
        subtitle: url,
      };
    },
  },
};
