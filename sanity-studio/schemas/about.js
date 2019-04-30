export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'About section title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'About blurb',
      type: 'blockContent',
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
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
