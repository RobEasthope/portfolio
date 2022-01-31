export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Portfolio section title',
      type: 'string',
    },
    {
      name: 'portfolioIndex',
      title: 'Portfolio index',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
};
