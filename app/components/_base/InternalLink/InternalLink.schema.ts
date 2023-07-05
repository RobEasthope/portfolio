import { RiLinksLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

import { ALL_PAGE_TYPES } from './ALL_PAGE_TYPES';

// const InternalLinkRender = ({ children }) => (
//   <span>
//     {children} <RiLinksLine />
//   </span>
// );

export default defineType({
  name: 'InternalLink',
  title: 'Internal link',
  type: 'object',
  description: 'Link to a page on the site',
  icon: RiLinksLine,
  fields: [
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
    prepare() {
      return {
        subtitle: 'Internal link',
      };
    },
  },
  // displayName: "InternalLink",
});
