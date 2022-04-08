import { globalCss } from '@/UI/styles/stitches.config';
import { TYPE_SCALE } from '@/UI/styles/constants/TYPE_SCALE';
import { MAX_WIDTH } from '@/UI/constants/MAX_WIDTHS';

export const globalStyles = globalCss({
  '*': {
    fontFamily: '$serif',
  },

  html: {
    // Minimum font fontSize
    fontSize: `16px`,

    // Dynamic font fontSize
    '@pageMinWidth': {
      fontSize: `calc(16px + (18 - 16) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
    },

    // Maximum font fontSize
    '@pageMaxWidth': {
      fontSize: `18px`,
    },
  },
});
