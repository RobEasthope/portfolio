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
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'gig' } }],
    },
    {
      name: 'coreSkills',
      title: 'Core skills',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sideProjects',
      title: 'Side projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
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
