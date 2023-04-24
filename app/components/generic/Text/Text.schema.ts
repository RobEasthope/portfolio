import { BiText } from 'react-icons/bi';
import { defineField, defineType } from 'sanity';
import { blockPreview } from 'sanity-pills';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  type: 'object',
  name: 'Text',
  title: 'Text',
  icon: BiText,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'FullText',
      validation: (Rule) => Rule.required().warning('Text: Text is missing'),
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title } = selection;
      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        title: blockPreview(title) || 'Text',
        subtitle: title ? 'Text' : '',
      };
    },
  },
});
