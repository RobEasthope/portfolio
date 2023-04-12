import { defineField, defineType, defineArrayMember } from 'sanity';
import { RiGalleryLine } from 'react-icons/ri';
import type { SelectionProps } from 'sanity-app/types/Selection';
import { ASPECT_RATIOS } from '~/components/config/ASPECT_RATIOS';
import { MAX_CONTENT_OPTIONS } from '~/components/config/MAX_CONTENT_OPTIONS';
import { COLUMN_OPTIONS } from '~/components/config/COLUMN_OPTIONS';

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
      validation: (Rule) =>
        Rule.required().warning(
          'Gallery: No images have been added to the gallery',
        ),
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
      validation: (Rule) =>
        Rule.required().error(
          'Gallery: Please select the desired number of columns',
        ),
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Gallery aspect ratio',
      type: 'number',
      options: {
        list: ASPECT_RATIOS,
        layout: 'radio',
      },
      validation: (Rule) =>
        Rule.required().warning('Gallery: Please select an aspect ratio'),
    }),
    defineField({
      name: 'maxWidth',
      title: 'Max width',
      type: 'string',
      description: 'Defaults to large',
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
    }),
    defineField({
      name: 'galleryCaption',
      title: 'Gallery caption',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection: SelectionProps) {
      const { title } = selection;
      return {
        title: title || 'Gallery',
        subtitle: title ? 'Gallery' : '',
      };
    },
  },
});
