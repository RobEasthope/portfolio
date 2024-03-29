import {
  defineArrayMember,
  defineField,
  defineType,
} from '@sanity-typed/types';

export default defineType({
  name: 'Footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'rawFooterNavigation',
      title: 'Footer navigation',
      type: 'array',
      of: [
        defineArrayMember({ type: 'InternalLinkWithTitle' }),
        defineArrayMember({ type: 'ExternalLinkWithTitle' }),
        defineArrayMember({ type: 'EmailLinkWithTitle' }),
      ],
      validation: (Rule) =>
        Rule.required().warning('No footer navigation links have been added'),
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright text',
      type: 'string',
      description: 'The current year will be added automatically',
      validation: (Rule) =>
        Rule.required().warning('No copyright text has been added'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      };
    },
  },
});
