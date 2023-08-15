import { defineField, defineType } from '@sanity-typed/types';
import { RiYoutubeFill } from 'react-icons/ri';

import type { BasicSanityListingProps } from 'types/BasicSanityListing';

import { MAX_CONTENT_OPTIONS } from 'constants/MAX_CONTENT_OPTIONS';

export default defineType({
  type: 'object',
  name: 'YoutubeVideo',
  title: 'YouTube video',
  icon: RiYoutubeFill,
  fields: [
    defineField({
      name: 'url',
      title: 'Youtube URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'maxWidth',
      title: 'Max width',
      type: 'string',
      description: 'Defaults to medium',
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    maxWidth: 'medium',
  },
  preview: {
    select: {
      title: 'caption',
      subtitle: 'url',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title, subtitle } = selection;
      return {
        title: 'Youtube video',
        subtitle: title || subtitle || '',
      };
    },
  },
});
