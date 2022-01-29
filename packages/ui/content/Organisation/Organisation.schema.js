export default {
  name: 'organisation',
  title: 'Organisation',
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
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
};