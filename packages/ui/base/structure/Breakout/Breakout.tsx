import { styled } from '~/UI/styles/stitches.config';
import { Box } from '~/UI/base/structure/Box/Box';

export const Breakout = styled(Box, {
  variants: {
    active: {
      true: {
        include: 'breakout',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
