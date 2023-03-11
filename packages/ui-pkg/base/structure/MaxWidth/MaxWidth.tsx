import { MAX_WIDTH } from 'ui-pkg/constants/MAX_WIDTHS';
import { styled } from 'ui-pkg/styles/stitches.config';

export const MaxWidth = styled('div', {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',

  variants: {
    width: {
      page: {
        maxWidth: MAX_WIDTH.MEDIUM,
      },
      text: {
        maxWidth: MAX_WIDTH.TEXT,
      },
      small: {
        maxWidth: MAX_WIDTH.SMALL,
      },
      medium: {
        maxWidth: MAX_WIDTH.MEDIUM,
      },
      large: {
        maxWidth: MAX_WIDTH.LARGE,
      },
      xLarge: {
        maxWidth: MAX_WIDTH.XLARGE,
      },
      full: {
        include: 'breakout',
      },
    },
  },

  defaultVariants: {
    width: 'large',
  },
});
