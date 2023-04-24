import { RiImage2Line } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

import { ASPECT_RATIOS } from '~/constants/ASPECT_RATIOS';
import { MAX_CONTENT_OPTIONS } from '~/constants/MAX_CONTENT_OPTIONS';

export default defineType({
  type: 'object',
  name: 'Image',
  title: 'Image',
  icon: RiImage2Line,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Image aspect ratio',
      type: 'number',
      description: 'Defaults to original image aspect ratio',
      options: {
        list: ASPECT_RATIOS,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
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
    aspectRatio: 0,
    maxWidth: 'large',
  },
  preview: {
    select: {
      title: 'image.caption',
      media: 'image',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title, media } = selection;
      return {
        title: title || 'Image',
        subtitle: title ? 'Image' : '',
        media,
      };
    },
  },
});
