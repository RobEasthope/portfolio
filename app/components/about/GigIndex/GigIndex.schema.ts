import { defineField, defineType } from 'sanity';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  name: 'GigIndex',
  title: 'Gig index',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'selectedGigs',
      title: 'Selected gigs',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title } = selection;
      return {
        title: title || 'Gig index',
        subtitle: title ? 'Gig index' : '',
      };
    },
  },
});
