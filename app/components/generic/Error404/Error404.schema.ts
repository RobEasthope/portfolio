import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'Error404',
  title: 'Error404',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule) => Rule.required().error('Logo is missing'),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required().error('Logo is missing'),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: (Rule) => Rule.required().error('Logo is missing'),
    }),
    defineField({
      name: 'rawCards',
      title: 'Page links',
      type: 'array',
      of: [defineArrayMember({ type: 'Error404NavCard' })],
    }),
    defineField({
      name: 'goBackTitle',
      title: 'Go back button title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Logo is missing'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Error 404',
      };
    },
  },
});
