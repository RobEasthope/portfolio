import { defineField, defineType } from '@sanity-typed/types';
import { BsBrush } from 'react-icons/bs';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  name: 'ProjectIndex',
  title: 'Project index',
  type: 'object',
  icon: BsBrush,
  fields: [
    defineField({
      name: 'index',
      title: 'Index',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title, media } = selection;
      return {
        title: title || 'Project index',
        subtitle: title ? 'Project index' : '',
        media,
      };
    },
  },
});
