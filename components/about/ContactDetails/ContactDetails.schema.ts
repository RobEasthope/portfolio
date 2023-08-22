import { defineField, defineType } from 'sanity';
import { RiPhoneLine } from 'react-icons/ri';

export default defineType({
  type: 'object',
  name: 'ContactDetails',
  title: 'Contact details',
  icon: RiPhoneLine,
  fields: [
    defineField({
      name: 'displayLogo',
      title: 'Display logo',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayDetails',
      title: 'Display block',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    displayLogo: true,
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
