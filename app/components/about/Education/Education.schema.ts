import { RiPhoneLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export default defineType({
  type: 'object',
  name: 'Education',
  title: 'Education',
  icon: RiPhoneLine,
  fields: [
    defineField({
      name: 'display',
      title: 'Display block',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    display: true,
  },
  preview: {
    prepare() {
      return {
        title: 'Education',
      };
    },
  },
});
