import { defineField, defineType } from 'sanity';
import { RiImage2Line } from 'react-icons/ri';
import type { SelectionProps } from 'sanity-app/types/Selection';

export default defineType({
  type: 'object',
  name: 'GalleryImage',
  title: 'Image',
  icon: RiImage2Line,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning('Image: Image is missing'),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare(selection: SelectionProps) {
      const { title, media } = selection;
      return {
        title: title || 'Gallery image',
        subtitle: title ? 'Gallery image' : '',
        media,
      };
    },
  },
});
