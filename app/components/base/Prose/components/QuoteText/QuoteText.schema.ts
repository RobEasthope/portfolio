import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  name: 'QuoteText',
  title: 'Quote text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Italics', value: 'em' },
        ],
        annotations: [],
      },
      lists: [],
    }),
  ],
});
