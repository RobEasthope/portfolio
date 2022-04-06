import { styled } from '@/UI/styles/stitches.config';
import { Box } from '@/UI/base/layout/Box/Box';

export const PaddedComponent = styled(Box, {
  width: '100%',

  variants: {
    content: {
      text: { paddingLeft: '$half', paddingRight: '$half' },
      nav: { paddingLeft: '$x1', paddingRight: '$x1' },
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
