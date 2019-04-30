export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Contact section title',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'email',
    },
    {
      name: 'twitter',
      title: 'Twitter profile',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn profile',
      type: 'url',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
};
