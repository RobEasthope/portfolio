import { defineField, defineType } from '@sanity-typed/types';
import { RiVideoLine } from 'react-icons/ri';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

import { MAX_CONTENT_OPTIONS } from '~/constants/MAX_CONTENT_OPTIONS';

export default defineType({
  type: 'object',
  name: 'MuxVideo',
  title: 'Mux video',
  icon: RiVideoLine,
  fields: [
    defineField({
      name: 'rawMuxVideo',
      title: 'Mux video',
      type: 'mux.video',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'muted',
      title: 'Mute video',
      type: 'boolean',
    }),
    defineField({
      name: 'loop',
      title: 'Loop video',
      type: 'boolean',
    }),
    defineField({
      name: 'autoPlay',
      title: 'Autoplay video',
      type: 'boolean',
    }),
    defineField({
      name: 'maxWidth',
      title: 'Max width',
      type: 'string',
      description: 'Defaults to medium',
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
    }),
  ],
  initialValue: {
    muted: true,
    loop: false,
    autoplay: false,
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
        title: 'Mux video',
        subtitle: title || subtitle || '',
      };
    },
  },
});
