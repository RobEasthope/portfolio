export default {
  name: 'details',
  title: 'Details',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'email',
    },
    {
      name: 'phoneNumber',
      title: 'Phone number',
      type: 'string',
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
    {
      name: 'github',
      title: 'Github profile',
      type: 'url',
    },
    {
      name: 'portfolioUrl',
      title: 'Portfolio URL',
      type: 'url',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
};
