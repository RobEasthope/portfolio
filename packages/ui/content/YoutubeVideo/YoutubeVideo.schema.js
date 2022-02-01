import React from 'react';
import { SiStorybook } from 'react-icons/si';
import { RiYoutubeFill } from 'react-icons/ri';
import { MAX_CONTENT_OPTIONS } from '../../constants/MAX_CONTENT_OPTIONS';

export default {
  type: 'object',
  name: 'YoutubeVideo',
  title: 'YouTube video',
  icon: RiYoutubeFill,
  fields: [
    {
      name: 'storybook',
      type: 'note',
      options: {
        icon: SiStorybook,
        message: (
          <a
            href="https://free-flight-academy-storybook.vercel.app/?path=/story/blocks-youtube-video--vanilla"
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
      title: 'Youtube URL',
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
        title: 'Youtube video',
        subtitle: url,
      };
    },
  },
};
