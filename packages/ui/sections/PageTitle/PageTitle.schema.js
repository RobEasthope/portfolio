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
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'customPageTitle' || 'Page Title',
      };
    },
  },
};
