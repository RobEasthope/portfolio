import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'MetadataSettings',
  title: 'Page info/SEO fallbacks',
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
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The main site url. Used to create a canonical url',
    }),
    defineField({
      name: 'titleFallback',
      title: 'Page title',
      type: 'string',
      description:
        'Can be overridden on a page by page basis in the pages Metadata tab.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionFallback',
      title: 'Page description',
      type: 'text',
      description:
        'Can be overridden on a page by page basis in the pages Metadata tab.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnailFallback',
      title: 'Page thumbnail',
      type: 'image',
      description:
        'Can be overridden on a page by page basis in the pages Metadata tab.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Page info/SEO fallbacks',
      };
    },
  },
});
