import { defineField, defineType } from '@sanity-typed/types';
import { RiImage2Line } from 'react-icons/ri';

import type { BasicSanityListingProps } from 'types/BasicSanityListing';

import { ASPECT_RATIOS } from 'constants/ASPECT_RATIOS';
import { MAX_CONTENT_OPTIONS } from 'constants/MAX_CONTENT_OPTIONS';

export default defineType({
  type: 'object',
  name: 'GalleryImage',
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
      validation: (Rule) => Rule.required().warning('Image: Image is missing'),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Gallery aspect ratio',
      type: 'number',
      description: 'Defaults to original aspect ratio',
      options: {
        list: ASPECT_RATIOS,
        layout: 'radio',
      },
    }),
    defineField({
      name: 'maxWidth',
      title: 'Max width',
      type: 'string',
      description: 'Defaults to full width',
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title, media } = selection;
      return {
        title: title || 'Gallery image',
        subtitle: title ? 'Gallery image' : '',
        media,
      };
    },
  },
});
