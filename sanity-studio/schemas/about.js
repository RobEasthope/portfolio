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
      name: 'profile',
      title: 'Profile',
      type: 'blockContent',
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'employeers',
      title: 'Employeers',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'organisation' } }],
    },
    {
      name: 'Skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tech' } }],
    },
    {
      name: 'opensource',
      title: 'Open source projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'opensource' } }],
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'education' } }],
    },
    {
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'organisation' } }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `CV`,
      }
    }
  },
};
