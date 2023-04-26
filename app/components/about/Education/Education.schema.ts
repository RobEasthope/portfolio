import { IoMdSchool } from 'react-icons/io';
import { defineField, defineType } from 'sanity';

export default defineType({
  type: 'object',
  name: 'Education',
  title: 'Education',
  icon: IoMdSchool,
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
