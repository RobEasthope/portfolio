import { RiPhoneLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export default defineType({
  type: 'object',
  name: 'ContactDetails',
  title: 'Contact details',
  icon: RiPhoneLine,
  fields: [
    defineField({
      name: 'displayDetails',
      title: 'Display',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    displayDetails: true,
  },
  preview: {
    prepare() {
      return {
        title: 'Contact details',
      };
    },
  },
});
