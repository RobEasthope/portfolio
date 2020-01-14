export default {
  name: 'cv',
  title: 'CV',
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
      of: [{
        title: 'Institution',
        type: 'object',
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
        ]
      }],
    },
    {
      name: 'details',
      title: 'Contact details',
      type: 'object',
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
          name: 'portfolioUrl',
          title: 'Portfolio URL',
          type: 'url',
        },
        {
          name: 'githubUrl',
          title: 'Github URL',
          type: 'url',
        },
      ]
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
