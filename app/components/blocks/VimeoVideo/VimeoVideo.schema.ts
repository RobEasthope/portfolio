import { defineField, defineType } from 'sanity';
import { RiVimeoFill } from 'react-icons/ri';
import type { SelectionProps } from 'sanity-app/types/Selection';
import { MAX_CONTENT_OPTIONS } from '~/components/config/MAX_CONTENT_OPTIONS';

export default defineType({
  type: 'object',
  name: 'VimeoVideo',
  title: 'Vimeo video',
  icon: RiVimeoFill,
  fields: [
    defineField({
      name: 'url',
      title: 'Vimeo URL',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'maxWidth',
      title: 'Max width',
      type: 'string',
      description: 'Defaults to medium',
      options: {
        list: MAX_CONTENT_OPTIONS,
      },
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'url',
    },
    prepare(selection: SelectionProps) {
      const { title, subtitle } = selection;
      return {
        title: 'Vimeo video',
        subtitle: title || subtitle || '',
      };
    },
  },
});
