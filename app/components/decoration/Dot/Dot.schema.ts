import { RxDotFilled } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

import { SPACER_OPTIONS } from '~/components/decoration/Spacer/SPACER_OPTIONS';

export default defineType({
  type: 'object',
  name: 'Dot',
  title: 'Dot',
  icon: RxDotFilled,
  fields: [
    defineField({
      name: 'displayDot',
      title: 'Display',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'spacingTop',
      title: 'Spacing top',
      type: 'string',
      description: 'Defaults to zero',
      options: {
        list: SPACER_OPTIONS,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'spacingBottom',
      title: 'Spacing bottom',
      type: 'string',
      description: 'Defaults to zero',
      options: {
        list: SPACER_OPTIONS,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    displayDot: true,
    spacingTop: '0',
    spacingBottom: '0',
  },
  preview: {
    prepare() {
      return {
        title: 'Dot',
      };
    },
  },
});
