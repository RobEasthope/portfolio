import { defineField, defineType } from 'sanity';
import { RiVideoLine } from 'react-icons/ri';
import { MAX_CONTENT_OPTIONS } from '~/components/config/MAX_CONTENT_OPTIONS';
import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  type: 'object',
  name: 'MuxVideo',
  title: 'Mux video',
  icon: RiVideoLine,
  fields: [
    defineField({
      name: 'rawMuxVideo',
      title: 'Mux video',
      type: 'mux.video',
      validation: (Rule) =>
        Rule.required().error('Mux video: Video is missing'),
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
    prepare(selection: BasicSanityListingProps) {
      const { title, subtitle } = selection;
      return {
        title: 'Mux video',
        subtitle: title || subtitle || '',
      };
    },
  },
});
