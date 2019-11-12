export default {
  name: 'gig',
  title: 'Gig',
  type: 'document',
  fields: [
    {
      name: 'employer',
      title: 'Employer',
      type: 'reference',
      to: { type: 'organisation' },
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'jobTitle',
      title: 'Job title',
      type: 'string',
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'projects',
      title: 'Related projects',
      type: 'reference',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      options: {
        dateFormat: 'DD-MMMM-YYYY',
      },
      validation: Rule => Rule.required().warning('Required field'),
    },
    {
      name: 'endDate',
      title: 'End date',
      type: 'date',
      options: {
        dateFormat: 'DD-MMMM-YYYY',
      },
    },
    
  ],
  preview: {
    select: {
      title: 'employer.name',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare(selection) {
      const { startDate, endDate, title } = selection
      return {
        title: title,
        subtitle: `${startDate.split(' -')} - ${endDate ? endDate.split(' -') : 'Present'}` // YYYY-MM-DD --> YYYY,
      }
    }
  },
  orderings: [
    {
      title: 'Start Date, New',
      name: 'startDateDesc',
      by: [
        { field: 'startDate.utc', direction: 'desc' }
      ]
    },
    {
      title: 'Start Date, Old',
      name: 'startDateAsc',
      by: [
        { field: 'startDate.utc', direction: 'asc' }
      ]
    },
  ]
};
