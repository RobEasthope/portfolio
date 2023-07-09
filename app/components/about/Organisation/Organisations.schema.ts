import { defineField, defineType } from '@sanity-typed/types';
import { RiShieldLine } from 'react-icons/ri';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  name: 'Organisations',
  title: 'Organisations',
  type: 'object',
  icon: RiShieldLine,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'BasicText',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title, media } = selection;
      return {
        title: title || 'Organisations',
        subtitle: title ? 'Organisations' : '',
        media,
      };
    },
  },
});
