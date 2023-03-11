import React from 'react';
import { ALL_PAGES_TYPES } from '../../../utils/sanity/ALL_PAGE_TYPES';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  name: 'InternalLink',
  title: 'Internal link',
  type: 'object',
  description: 'Link to a page on the site',
  fields: [
    {
      name: 'internalUID',
      title: 'Page',
      type: 'reference',
      to: ALL_PAGES_TYPES,
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        subtitle: 'Internal link',
      };
    },
  },
  displayName: 'InternalLink',
};
