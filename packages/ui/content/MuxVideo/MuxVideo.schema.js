import React from 'react';
import { SiStorybook } from 'react-icons/si';
import { RiVideoLine } from 'react-icons/ri';
import { MAX_CONTENT_OPTIONS } from '../../constants/MAX_CONTENT_OPTIONS';

export default {
  type: 'object',
  name: 'MuxVideo',
  title: 'Mux video',
  icon: RiVideoLine,
  fields: [
    {
      name: 'storybook',
      type: 'note',
      options: {
        icon: SiStorybook,
        message: (
          <a
            href="https://free-flight-academy-storybook.vercel.app/?path=/story/blocks-mux-video--vanilla"
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
      name: 'rawMuxVideo',
      title: 'Mux video',
      type: 'mux.video',
      validation: (Rule) =>
        Rule.required().error('Mux video: Video is missing'),
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
    select: {},
    prepare() {
      return {
        title: 'Mux video',
      };
    },
  },
};
