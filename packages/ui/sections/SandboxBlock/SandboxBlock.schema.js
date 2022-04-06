export default {
  name: 'sandbox',
  title: 'Sandbox',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Sandbox section title',
      type: 'string',
    },
    {
      name: 'sandboxIndex',
      title: 'Sandbox index',
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
