import { RiQuillPenLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

export default defineType({
  name: 'Page',
  title: 'Page',
  type: 'document',
  icon: RiQuillPenLine,
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 30,
      },
      description: 'Set the page URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rawSections',
      title: 'Page blocks',
      type: 'array',
      of: [
        { type: 'Dot' },
        { type: 'Gallery' },
        { type: 'Image' },
        { type: 'LandingHero' },
        { type: 'Organisations' },
        { type: 'PageTitle' },
        { type: 'ProjectIndex' },
        { type: 'Spacer' },
        { type: 'Text' },
        { type: 'VimeoVideo' },
        { type: 'YoutubeVideo' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metadataDescription',
      title: 'Metadata description',
      description: 'Used in social media and search engine listings',
      type: 'text',
    }),
    defineField({
      name: 'metadataImage',
      title: 'Metadata image',
      description: 'Used in social media and search engine listings.',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: BasicSanityListingProps) {
      return {
        title: title || 'Page',
        subtitle: title ? 'Page' : '',
      };
    },
  },
});
