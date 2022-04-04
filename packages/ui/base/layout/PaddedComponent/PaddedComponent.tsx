import { styled } from '@/UI/styles/stitches.config';

export const PaddedComponent = styled('div', {
  width: '100%',

  variants: {
    content: {
      text: { paddingLeft: '$half', paddingRight: '$half' },
      media: {
        position: 'relative',
        left: '50%',
        right: '50',
        marginX: '-50vw',
        width: '100vw',
        maxWidth: '100vw',

        '@small': {
          paddingX: '$half',
          left: 'initial',
          right: 'initial',
          marginX: 'auto',
          width: 'inherit',
        },
      },
    },
  },

  defaultVariants: {
    content: 'text',
  },
});
