import { BiText } from 'react-icons/bi';

export default {
  type: 'object',
  name: 'PageTitle',
  title: 'PageTitle',
  icon: BiText,
  fields: [
    {
      name: 'customPageTitle',
      title: 'Custom page title',
      description: 'Optional',
      type: 'string',
    },
  ],
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
