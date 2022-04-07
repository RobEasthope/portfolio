import { MAX_WIDTH } from '@/UI/constants/MAX_WIDTHS';
import { styled } from '@/UI/styles/stitches.config';

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
        position: 'relative',
        left: '50%',
        right: '50',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        maxWidth: '100vw',
        width: '100vw',
      },
    },
  },

  defaultVariants: {
    width: 'large',
  },
});
