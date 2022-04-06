export default {
  name: 'landing',
  title: 'Landing',
  type: 'document',
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'image',
      title: 'Background image',
      type: 'altImage',
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'video',
      title: 'Landing video',
      type: 'mux.video',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
};
