import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  name: 'EmphasisedText',
  title: 'Emphasised text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [],
      marks: {
        decorators: [{ title: 'Highlight', value: 'strong' }],
        annotations: [],
      },
      lists: [],
    }),
  ],
});
