import { BiText } from 'react-icons/bi';

export default {
  type: 'object',
  name: 'Text',
  title: 'Text',
  icon: BiText,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'BasicText',
      validation: (Rule) => Rule.required().warning('Text: Text is missing'),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Text',
      };
    },
  },
};
