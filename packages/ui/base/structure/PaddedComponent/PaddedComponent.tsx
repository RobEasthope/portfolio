import { styled } from '~/UI/styles/stitches.config';
import { Box } from '~/UI/base/structure/Box/Box';

export const PaddedComponent = styled(Box, {
  width: '100%',

  variants: {
    content: {
      text: { size: { selector: 'paddingX', min: 12, max: 48 } },
      nav: { size: { selector: 'paddingX', min: 12, max: 48 } },
      media: {
        position: 'relative',
        left: '50%',
        right: '50',
        marginX: '-50vw',
        marginY: '$x2',
        width: '100vw',
        maxWidth: '100vw',

        '@small': {
          size: { selector: 'paddingX', min: 12, max: 48 },
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
