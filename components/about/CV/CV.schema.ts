import {
  defineArrayMember,
  defineField,
  defineType,
} from '@sanity-typed/types';
import { HiOutlineBriefcase } from 'react-icons/hi';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  name: 'CV',
  title: 'CV',
  type: 'document',
  icon: HiOutlineBriefcase,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 30,
      },
      description: 'Set the page URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rawSections',
      title: 'Page blocks',
      type: 'array',
      of: [
        defineArrayMember({ type: 'Dot' }),
        defineArrayMember({ type: 'ContactDetails' }),
        defineArrayMember({ type: 'Education' }),
        defineArrayMember({ type: 'GigIndex' }),
        defineArrayMember({ type: 'Organisations' }),
        defineArrayMember({ type: 'Spacer' }),
        defineArrayMember({ type: 'Text' }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: BasicSanityListingProps) {
      return {
        title: title || 'CV',
        subtitle: title ? 'CV' : '',
      };
    },
  },
});
