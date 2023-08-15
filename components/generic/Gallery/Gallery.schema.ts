import { defineArrayMember, defineField, defineType } from 'sanity';
import { RiGalleryLine } from 'react-icons/ri';

import type { BasicSanityListingProps } from 'types/BasicSanityListing';

import { ASPECT_RATIOS } from 'constants/ASPECT_RATIOS';
import { COLUMN_OPTIONS } from 'constants/COLUMN_OPTIONS';
import { MAX_CONTENT_OPTIONS } from 'constants/MAX_CONTENT_OPTIONS';

export default defineType({
  type: 'object',
  name: 'Gallery',
  title: 'Gallery',
  icon: RiGalleryLine,
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineArrayMember({ type: 'GalleryImage' })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryCaption',
      title: 'Gallery caption',
      type: 'text',
    }),
    defineField({
      name: 'columns',
      title: 'Number of columns',
      type: 'string',
      description: 'Number of columns at full size',
      options: {
        list: COLUMN_OPTIONS,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Gallery aspect ratio',
      type: 'number',
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
      description: 'Defaults to large',
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    columns: '3',
    aspectRatio: 4 / 3,
    maxWidth: 'large',
  },
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title } = selection;
      return {
        title: title || 'Gallery',
        subtitle: title ? 'Gallery' : '',
      };
    },
  },
});
