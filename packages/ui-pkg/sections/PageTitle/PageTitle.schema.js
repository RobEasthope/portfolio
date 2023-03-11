import { BiText } from 'react-icons/bi';

export default {
  type: 'object',
  name: 'PageTitle',
  title: 'PageTitle',
  icon: BiText,
  fields: [
    {
      name: 'usePageTitle',
      title: 'Use page title?',
      type: 'boolean',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'customPageTitle',
      title: 'Custom page title',
      type: 'string',
      hidden: ({ parent }) => parent?.usePageTitle === true,
    },
  ],
  initialValue: {
    usePageTitle: true,
  },
  preview: {
    select: {
      customPageTitle: 'customPageTitle',
    },
    prepare({ customPageTitle }) {
      return {
        title: customPageTitle || 'Page title',
      };
    },
  },
};
