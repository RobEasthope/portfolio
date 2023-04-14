import { defineField, defineType } from 'sanity';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  name: 'organisation',
  title: 'Organisation',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'hiddenOrg',
      title: 'Hide organisation',
      description: 'Hides organisation on frontend',
      type: 'boolean',
    }),
  ],
  initialValue: {
    hiddenOrg: false,
  },
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title, media } = selection;
      return {
        title: title || 'Example block',
        subtitle: title ? 'Example block' : '',
        media,
      };
    },
  },
});
