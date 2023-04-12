import { defineField, defineType } from 'sanity';
import { BiHeading } from 'react-icons/bi';
import type { SelectionProps } from 'sanity-app/types/Selection';

export default defineType({
  type: 'object',
  name: 'LandingHero',
  title: 'Landing hero',
  icon: BiHeading,
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'bkgMode',
      title: 'Background mode',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      validation: (Rule) =>
        Rule.required().error('Landing hero: Background mode has not been set'),
    }),
    defineField({
      name: 'bkgImage',
      title: 'Background image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }),
      ],
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      hidden: ({ parent }) => parent?.bkgMode !== 'image',
    }),
    defineField({
      name: 'rawMuxVideo',
      title: 'Background video',
      type: 'mux.video',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      hidden: ({ parent }) => parent?.bkgMode !== 'video',
    }),
    defineField({
      name: 'caption',
      title: 'Background caption',
      type: 'text',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      hidden: ({ parent }) => !parent?.bkgMode,
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'bkgImage',
    },
    prepare(selection: SelectionProps) {
      const { title, media } = selection;
      return {
        title: title || 'Landing hero',
        subtitle: title ? 'Landing hero' : '',
        media,
      };
    },
  },
});
