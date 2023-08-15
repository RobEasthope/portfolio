import { defineField, defineType } from '@sanity-typed/types';
import { AiOutlineColumnHeight } from 'react-icons/ai';

import type { BasicSanityListingProps } from 'types/BasicSanityListing';

import { SPACER_OPTIONS } from 'components/decoration/Spacer/SPACER_OPTIONS';

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
  initialValue: {
    height: '1',
  },
  preview: {
    select: {
      subtitle: 'height',
    },
    prepare(selection: BasicSanityListingProps) {
      const { subtitle } = selection;
      return {
        title: 'Spacer',
        subtitle: subtitle ? `Height: ${subtitle}` : '',
      };
    },
  },
});
