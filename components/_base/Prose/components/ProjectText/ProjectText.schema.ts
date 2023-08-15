import { defineArrayMember, defineType } from 'sanity';
import { createBlockValidator } from 'sanity-pills';

const projectTextValidator = createBlockValidator({
  required: false,
  noEmptyBlocks: true,
  validateLinks: true,
  styleRequired: true,
  noStackedMarks: true,
  noNewlines: true,
  noTerminatingWhitespace: true,
});

export default defineType({
  name: 'ProjectText',
  title: 'Project text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Large heading', value: 'h2' },
        { title: 'Medium heading', value: 'h3' },
        { title: 'Small heading', value: 'h4' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          { type: 'InternalLink' },
          { type: 'ExternalLink' },
          { type: 'EmailLink' },
        ],
      },
    }),
    defineArrayMember({ type: 'Gallery' }),
    defineArrayMember({ type: 'Image' }),
    defineArrayMember({ type: 'MuxVideo' }),
    defineArrayMember({ type: 'VimeoVideo' }),
    defineArrayMember({ type: 'YoutubeVideo' }),
  ],
  validation: projectTextValidator,
});
