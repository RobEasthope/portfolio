import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'MetadataFallbacks',
  title: 'Metadata fallbacks',
  type: 'document',
  fields: [
    defineField({
      name: 'sitename',
      title: 'Sitename',
      type: 'string',
      description: 'Used for SEO & descriptive purposes',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'Can be overridden on a page by page basis in the pages Metadata tab.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'Can be overridden on a page by page basis in the pages Metadata tab.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description:
        'Can be overridden on a page by page basis in the pages Metadata tab.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The main site url. Used to create a canonical url',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Metadata fallbacks',
      };
    },
  },
});
