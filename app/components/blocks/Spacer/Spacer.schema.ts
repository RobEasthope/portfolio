import { defineField, defineType } from 'sanity';
import type { SelectionProps } from 'sanity-app/types/Selection';
import { SPACER_OPTIONS } from '~/components/blocks/Spacer/SPACER_OPTIONS';
import { AiOutlineColumnHeight } from 'react-icons/ai';

export default defineType({
  type: 'object',
  name: 'Spacer',
  title: 'Spacer',
  icon: AiOutlineColumnHeight,
  fields: [
    defineField({
      name: 'height',
      title: 'Height',
      type: 'string',
      description: 'Defaults to single',
      options: {
        list: SPACER_OPTIONS,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      subtitle: 'height',
    },
    prepare(selection: SelectionProps) {
      const { subtitle } = selection;
      return {
        title: 'Spacer',
        subtitle: subtitle || '',
      };
    },
  },
});
