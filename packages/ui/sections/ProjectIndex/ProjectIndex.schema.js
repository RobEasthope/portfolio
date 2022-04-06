export default {
  name: 'ProjectIndex',
  title: 'Project index',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Portfolio section title',
      type: 'string',
    },
    {
      name: 'index',
      title: 'Index',
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
