import * as dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { defineField, defineType } from 'sanity';
import { formatSlug } from '~/utils/formatSlug';

import { PROJECT_SLUG } from '~/components/pages/Project/PROJECT_SLUG';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortTitle',
      title: 'Short title',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    }),
    defineField({
      name: 'slug',
      title: 'Page url/slug',
      type: 'slug',
      description: 'Set the page URL',
      options: {
        source: 'title',
        slugify: (input) => {
          const formattedSlug = formatSlug(input);

          return `${PROJECT_SLUG}/${formattedSlug}`;
        },
      },
      validation: (Rule) => Rule.required().error('The slug is missing'),
    }),
    defineField({
      name: 'projectText',
      title: 'Text',
      type: 'ProjectText',
      description:
        'I keep six honest serving-men; (They taught me all I knew); Their names are What and Why and When; And How and Where and Who. - Rudyard Kipling',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Image gallery',
      type: 'array',
      of: [{ type: 'altImage' }],
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: { type: 'organisation' },
    }),
    defineField({
      name: 'agency',
      title: 'Agency',
      type: 'reference',
      to: { type: 'organisation' },
    }),
    defineField({
      name: 'date',
      title: 'Date (Written form)',
      type: 'string',
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
    defineField({
      name: 'projectUrlTitle',
      title: 'Project url title',
      type: 'string',
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project url',
      type: 'url',
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repo url',
      type: 'url',
    }),
    defineField({
      name: 'techUsed',
      title: 'Technologies used',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tech' } }],
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning('Required field'),
    }),
    defineField({
      name: 'containLogo',
      title: 'Contain logo',
      type: 'boolean',
    }),
    defineField({
      name: 'displayProject',
      title: 'Display project',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Start Date',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
    {
      title: 'End Date',
      name: 'endDateDesc',
      by: [{ field: 'endDate', direction: 'desc' }],
    },
  ],
  initialValue: {
    containLogo: false,
    displayProject: false,
  },
  preview: {
    select: {
      title: 'title',
      subtitle: 'client.name',
      media: 'thumbnailImage',
      // startDate: "startDate",
      // endDate: "endDate",
    },
    // prepare({
    //   title,
    //   startDate = null,
    //   endDate = null,
    //   thumbnailImage,
    // }: {
    //   title: string;
    //   thumbnailImage: string;
    //   startDate: Date | null;
    //   endDate: Date | null;
    // }) {
    //   dayjs.extend(advancedFormat);

    //   const formattedStartDate = dayjs.default(startDate).format("MMM Do YYYY");
    //   const formattedEndDate = dayjs.default(endDate).format("MMM Do YYYY");

    //   return {
    //     title,
    //     media: thumbnailImage,
    //     // subtitle: `${formattedStartDate || "Date missing"} - ${
    //     //   endDate ? formattedEndDate : "Present"
    //     // }`,
    //   };
    // },
  },
});
