export default {
  name: 'opensource',
  title: 'Open source projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Open source title',
      type: 'string',
    },
    {
      name: 'opensourceIndex',
      title: 'Open source projects',
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
