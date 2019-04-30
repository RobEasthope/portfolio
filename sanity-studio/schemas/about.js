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
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
};
