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
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'jobTitle',
      title: 'Job title',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description:
        'I keep six honest serving-men; (They taught me all I knew); Their names are What and Why and When; And How and Where and Who. - Rudyard Kipling',
      validation: (Rule) => Rule.required().warning('Required field'),
    },
    {
      name: 'projects',
      title: 'Related projects',
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
      validation: (Rule) => Rule.required().warning('Required field'),
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
  orderings: [
    {
      title: 'Start Date, New',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
    {
      title: 'Start Date, Old',
      name: 'startDateAsc',
      by: [{ field: 'startDate', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'employer.name',
      startDate: 'startDate',
      endDate: 'endDate',
      employerLogo: 'employer.logo',
    },
    prepare(selection) {
      const { startDate, endDate, title, employerLogo } = selection;
      return {
        title,
        media: employerLogo,
        subtitle: `${startDate.split(' -')} - ${
          endDate ? endDate.split(' -') : 'Present'
        }`, // YYYY-MM-DD --> YYYY,
      };
    },
  },
};
