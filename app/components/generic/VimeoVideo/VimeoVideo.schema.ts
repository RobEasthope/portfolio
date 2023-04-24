import { RiVimeoFill } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

import { MAX_CONTENT_OPTIONS } from '~/constants/MAX_CONTENT_OPTIONS';

export default defineType({
  type: 'object',
  name: 'VimeoVideo',
  title: 'Vimeo video',
  icon: RiVimeoFill,
  fields: [
    defineField({
      name: 'url',
      title: 'Vimeo URL',
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
        title: 'Vimeo video',
        subtitle: title || subtitle || '',
      };
    },
  },
});
