import React from 'react';
import { ALL_PAGES_TYPES } from '../../../utils/sanity/ALL_PAGE_TYPES';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  name: 'InternalLinkWithTitle',
  title: 'Internal link',
  type: 'object',
  description: 'Link to a document on the site',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
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
};
