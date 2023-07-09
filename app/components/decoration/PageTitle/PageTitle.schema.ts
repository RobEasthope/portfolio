import { defineField, defineType } from '@sanity-typed/types';
import { BiText } from 'react-icons/bi';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  type: 'object',
  name: 'PageTitle',
  title: 'PageTitle',
  icon: BiText,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title } = selection;
      return {
        title: selection.title || 'Page title',
        subtitle: title ? 'Page title' : '',
      };
    },
  },
});
