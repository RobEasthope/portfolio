export default {
  name: 'BasicText',
  title: 'Basic text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [{ type: 'InternalLink' }, { type: 'ExternalLink' }],
      },
    },
  ],
};
