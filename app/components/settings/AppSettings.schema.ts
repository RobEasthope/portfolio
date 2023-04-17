import { defineField, defineType } from 'sanity';

import { ALL_PAGES_TYPES } from '~/components/pages/ALL_PAGES_TYPES';

export default defineType({
  name: 'appSettings',
  title: 'App settings',
  type: 'document',
  fields: [
    defineField({
      name: 'rawHomePageRef',
      title: 'Home page',
      type: 'reference',
      to: ALL_PAGES_TYPES,
      description: 'Select home page (Critical requirement)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'App settings',
      };
    },
  },
});
