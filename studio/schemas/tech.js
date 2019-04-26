export default {
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
};
