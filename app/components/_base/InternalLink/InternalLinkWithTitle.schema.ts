import { RiLinksLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

import type { BasicSanityListingProps } from '~/types/BasicSanityListing';

import { ALL_PAGE_TYPES } from './ALL_PAGE_TYPES';

// const InternalLinkRender = ({ children }) => (
//   <span>
//     {children} <RiLinksLine />
//   </span>
// );

export default defineType({
  name: 'InternalLinkWithTitle',
  title: 'Internal link',
  type: 'object',
  description: 'Link to a document on the site',
  icon: RiLinksLine,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internalUID',
      title: 'Page',
      type: 'reference',
      to: ALL_PAGE_TYPES,

      validation: (Rule) => Rule.required(),
    }),
  ],
  // blockEditor: {
  //   icon: () => "🔗",
  //   render: InternalLinkRender,
  // },
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection: BasicSanityListingProps) {
      const { title } = selection;
      return {
        title,
        subtitle: 'Internal link',
      };
    },
  },
});
