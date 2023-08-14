import {
  defineArrayMember,
  defineField,
  defineType,
} from '@sanity-typed/types';
import { BsFillCircleFill } from 'react-icons/bs';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  name: 'GigIndex',
  title: 'Gig index',
  type: 'object',
  icon: BsFillCircleFill,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'gigsDisplayed',
      title: 'Gigs displayed',
      type: 'string',
      options: {
        list: [
          {
            title: 'All gigs',
            value: 'all',
          },
          { title: 'Recent', value: 'recent' },
          { title: 'Custom list', value: 'custom' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'selectedGigs',
      title: 'Selected gigs',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'project' } })],
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
