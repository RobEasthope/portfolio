import { AiOutlineColumnHeight } from 'react-icons/ai';
import { defineField, defineType } from 'sanity';

export default defineType({
  type: 'object',
  name: 'Dot',
  title: 'Dot',
  icon: AiOutlineColumnHeight,
  fields: [
    defineField({
      name: 'displayDot',
      title: 'Display',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    displayDot: true,
  },
  preview: {
    prepare() {
      return {
        title: 'Spacer',
      };
    },
  },
});
