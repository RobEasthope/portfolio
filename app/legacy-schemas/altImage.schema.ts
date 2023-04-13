import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'altImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'imageAsset',
      title: 'Asset',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'altText',
      title: 'Alt text',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Required field'),
    }),
  ],
});
