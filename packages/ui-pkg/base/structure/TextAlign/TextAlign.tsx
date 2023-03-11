import { styled } from 'ui-pkg/styles/stitches.config';
import { Box } from 'ui-pkg/base/structure/Box/Box';

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
