import { BsFillCircleFill } from 'react-icons/bs';
import { defineField, defineType } from 'sanity';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  name: 'CV',
  title: 'CV',
  type: 'document',
  icon: BsFillCircleFill,
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
        { type: 'Dot' },
        { type: 'Organisations' },
        { type: 'Spacer' },
        { type: 'Text' },
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
