export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'shortTitle',
      title: 'Short title',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description:
        'I keep six honest serving-men; (They taught me all I knew); Their names are What and Why and When; And How and Where and Who. - Rudyard Kipling',
    },
    {
      name: 'showreel',
      title: 'Showreel',
      type: 'mux.video',
    },
    {
      name: 'gallery',
      title: 'Image gallery',
      type: 'array',
      of: [{ type: 'altImage' }],
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: { type: 'organisation' },
    },
    {
      name: 'agency',
      title: 'Agency',
      type: 'reference',
      to: { type: 'organisation' },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'projectUrlTitle',
      title: 'Project url title',
      type: 'string',
    },
    {
      name: 'projectUrl',
      title: 'Project url',
      type: 'url',
    },
    {
      name: 'repoUrl',
      title: 'Repo url',
      type: 'url',
    },
    {
      name: 'techUsed',
      title: 'Technologies used',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tech' } }],
    },
    {
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning('Required field'),
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'client.name',
      media: 'thumbnailImage',
    },
  },
};
