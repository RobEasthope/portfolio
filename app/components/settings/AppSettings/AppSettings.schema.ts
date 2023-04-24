import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'AppSettings',
  title: 'App settings',
  type: 'document',
  fields: [
    defineField({
      name: 'rawHomePageRef',
      title: 'Home page',
      type: 'reference',
      to: [{ type: 'Page' }],
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
