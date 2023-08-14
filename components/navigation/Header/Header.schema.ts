import {
  defineArrayMember,
  defineField,
  defineType,
} from '@sanity-typed/types';

export default defineType({
  name: 'Header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule) => Rule.required().error('Logo is missing'),
    }),
    defineField({
      name: 'rawPrimaryNavigation',
      title: 'Primary header navigation',
      type: 'array',
      description: 'Displayed on the left at larger sizes',
      of: [
        defineArrayMember({ type: 'InternalLinkWithTitle' }),
        defineArrayMember({ type: 'ExternalLinkWithTitle' }),
        defineArrayMember({ type: 'EmailLinkWithTitle' }),
      ],
    }),
    defineField({
      name: 'rawSecondaryNavigation',
      title: 'Secondary header navigation',
      type: 'array',
      description: 'Displayed on the right at larger sizes',
      of: [
        defineArrayMember({ type: 'InternalLinkWithTitle' }),
        defineArrayMember({ type: 'ExternalLinkWithTitle' }),
        defineArrayMember({ type: 'EmailLinkWithTitle' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      };
    },
  },
});
