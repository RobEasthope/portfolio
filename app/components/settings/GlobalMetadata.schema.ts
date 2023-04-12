import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'GlobalMetadata',
  type: 'document',
  title: 'Global SEO metadata',
  fields: [
    defineField({
      name: 'globalSitename',
      title: 'Sitename',
      type: 'string',
      description: 'Used for SEO & descriptive purposes',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'globalTitle',
      title: 'Page title',
      type: 'string',
      description:
        'Can be overridden on a page by page basis in the pages Metadata tab.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'globalTitleTemplate',
      title: 'Page title template',
      type: 'string',
      description: 'Displayed after the page title e.g. PAGE TITLE | Ida',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'globalDescription',
      title: 'Page description',
      type: 'text',
      description:
        'Can be overridden on a page by page basis in the pages Metadata tab.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'globalThumbnail',
      title: 'Page thumbnail',
      type: 'image',
      description:
        'Can be overridden on a page by page basis in the pages Metadata tab.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    }),
    defineField({
      name: 'globalTwitterSiteHandle',
      title: 'Twitter site username',
      type: 'string',
      description:
        'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#attribution',
      validation: (Rule) => Rule.required().warning(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Global metadata',
      };
    },
  },
});
