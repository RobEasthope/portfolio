export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'qualification',
      title: 'Qualification',
      type: 'string'
    },
    {
      name: 'when',
      title: 'When',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
};
