import { styled } from '~/UI/styles/stitches.config';
import { Box } from '~/UI/base/layout/Box/Box';

export const TextAlign = styled(Box, {
  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      centre: {
        textAlign: 'center',
      },
    },
  },
  defaultVariants: {
    align: 'left',
  },
});
