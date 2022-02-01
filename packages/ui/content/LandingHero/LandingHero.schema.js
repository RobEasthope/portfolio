import React from 'react';
import { SiStorybook } from 'react-icons/si';
import { BiHeading } from 'react-icons/bi';
import { headingUI } from '../../utils/sanity/headingUI';

export default {
  type: 'object',
  name: 'LandingHero',
  title: 'Landing hero',
  icon: BiHeading,
  fields: [
    {
      name: 'storybook',
      type: 'note',
      options: {
        icon: SiStorybook,
        message: (
          <>
            Preview:{' '}
            <a
              href="https://free-flight-academy-storybook.vercel.app/?path=/story/blocks-landing-hero--background-image"
              target="_blank"
              rel="noopener noreferrer"
            >
              Background image
            </a>{' '}
            |{' '}
            <a
              href="https://free-flight-academy-storybook.vercel.app/?path=/story/blocks-landing-hero--background-video"
              target="_blank"
              rel="noopener noreferrer"
            >
              Background video
            </a>
          </>
        ),
        tone: 'brand',
      },
    },
    headingUI('Foreground'),
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    headingUI('Background'),
    {
      name: 'bkgMode',
      title: 'Background mode',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      validation: (Rule) =>
        Rule.required().error('Landing hero: Background mode has not been set'),
    },
    {
      name: 'bkgImage',
      title: 'Background image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
      hidden: ({ parent }) => parent?.bkgMode !== 'image',
    },
    {
      name: 'rawBackgroundVideo',
      title: 'Background video',
      type: 'mux.video',
      hidden: ({ parent }) => parent?.bkgMode !== 'video',
    },
    {
      name: 'caption',
      title: 'Background caption',
      type: 'text',
      hidden: ({ parent }) => !parent?.bkgMode,
    },
  ],
  preview: {
    select: {
      bkgImage: 'bkgImage',
    },
    prepare({ bkgImage }) {
      return {
        title: 'Landing hero',
        media: bkgImage,
      };
    },
  },
};
