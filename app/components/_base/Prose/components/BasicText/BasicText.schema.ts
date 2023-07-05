import { defineArrayMember, defineType } from 'sanity';
import { createBlockValidator } from 'sanity-pills';

const basicTextValidator = createBlockValidator({
  required: false,
  noEmptyBlocks: true,
  validateLinks: true,
  styleRequired: true,
  noStackedMarks: true,
  noNewlines: true,
  noTerminatingWhitespace: true,
});

export default defineType({
  name: 'BasicText',
  title: 'Basic text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          { type: 'InternalLink' },
          { type: 'ExternalLink' },
          { type: 'EmailLink' },
        ],
      },
    }),
  ],
  validation: basicTextValidator,
});
