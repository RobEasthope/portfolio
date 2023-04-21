import * as dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gig',
  title: 'Gig',
  type: 'document',
  fields: [
    defineField({
      name: 'employer',
      title: 'Employer',
      type: 'reference',
      to: { type: 'organisation' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description:
        'I keep six honest serving-men; (They taught me all I knew); Their names are What and Why and When; And How and Where and Who. - Rudyard Kipling',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      options: {
        dateFormat: 'DD-MMMM-YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'date',
      options: {
        dateFormat: 'DD-MMMM-YYYY',
      },
    }),
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
    prepare({ startDate, endDate, title, employerLogo }) {
      dayjs.extend(advancedFormat);

      const formattedStartDate = dayjs.default(startDate).format('MMM Do YYYY');
      const formattedEndDate = dayjs.default(endDate).format('MMM Do YYYY');

      return {
        title,
        media: employerLogo,
        subtitle: `${formattedStartDate} - ${
          endDate ? formattedEndDate : 'Present'
        }`, // YYYY-MM-DD --> YYYY,
      };
    },
  },
});
