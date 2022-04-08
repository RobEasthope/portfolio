import { SPACING } from '@/UI/constants/SPACING';
import { styled } from '@/UI/styles/stitches.config';
import { TYPE_SCALE } from '@/UI/styles/constants/TYPE_SCALE';
import { MAX_WIDTH } from '@/UI/constants/MAX_WIDTHS';

export const Text = styled('div', {
  color: '$text',

  marginY: 0,

  variants: {
    typeSize: {
      // VR_BASE: 1.75rem (1rem * 1.75)
      jumbotron: {
        // Minimum font fontSize
        fontSize: `${TYPE_SCALE.JUMBOTRON.MIN}px`,

        // Dynamic font fontSize
        '@pageMinWidth': {
          fontSize: `calc(${TYPE_SCALE.JUMBOTRON.MIN}px + (${TYPE_SCALE.JUMBOTRON.MAX} - ${TYPE_SCALE.JUMBOTRON.MIN}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum font fontSize
        '@pageMaxWidth': {
          fontSize: `${TYPE_SCALE.JUMBOTRON.MAX}px`,
        },
        lineHeight: `calc(${SPACING.VR_BASE} * 3)`,
      },
      xLarge: {
        // Minimum font fontSize
        fontSize: `${TYPE_SCALE.EXTRA_LARGE.MIN}px`,

        // Dynamic font fontSize
        '@pageMinWidth': {
          fontSize: `calc(${TYPE_SCALE.EXTRA_LARGE.MIN}px + (${TYPE_SCALE.EXTRA_LARGE.MAX} - ${TYPE_SCALE.EXTRA_LARGE.MIN}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum font fontSize
        '@pageMaxWidth': {
          fontSize: `${TYPE_SCALE.EXTRA_LARGE.MAX}px`,
        },
        lineHeight: `calc(${SPACING.VR_BASE} * 2)`,
      },
      large: {
        // Minimum font fontSize
        fontSize: `${TYPE_SCALE.LARGE.MIN}px`,

        // Dynamic font fontSize
        '@pageMinWidth': {
          fontSize: `calc(${TYPE_SCALE.LARGE.MIN}px + (${TYPE_SCALE.LARGE.MAX} - ${TYPE_SCALE.LARGE.MIN}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum font fontSize
        '@pageMaxWidth': {
          fontSize: `${TYPE_SCALE.LARGE.MAX}px`,
        },
        lineHeight: `calc(${SPACING.VR_BASE} * 1.5)`,
      },
      medium: {
        // Minimum font fontSize
        fontSize: `${TYPE_SCALE.MEDIUM.MIN}px`,

        // Dynamic font fontSize
        '@pageMinWidth': {
          fontSize: `calc(${TYPE_SCALE.MEDIUM.MIN}px + (${TYPE_SCALE.MEDIUM.MAX} - ${TYPE_SCALE.MEDIUM.MIN}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum font fontSize
        '@pageMaxWidth': {
          fontSize: `${TYPE_SCALE.MEDIUM.MAX}px`,
        },
        lineHeight: `calc(${SPACING.VR_BASE})`,
      },
      standard: {
        // Minimum font fontSize
        fontSize: `${TYPE_SCALE.STANDARD.MIN}px`,

        // Dynamic font fontSize
        '@pageMinWidth': {
          fontSize: `calc(${TYPE_SCALE.STANDARD.MIN}px + (${TYPE_SCALE.STANDARD.MAX} - ${TYPE_SCALE.STANDARD.MIN}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum font fontSize
        '@pageMaxWidth': {
          fontSize: `${TYPE_SCALE.STANDARD.MAX}px`,
        },
        lineHeight: SPACING.VR_BASE,
      },
      small: {
        // Minimum font fontSize
        fontSize: `${TYPE_SCALE.SMALL.MIN}px`,

        // Dynamic font fontSize
        '@pageMinWidth': {
          fontSize: `calc(${TYPE_SCALE.SMALL.MIN}px + (${TYPE_SCALE.SMALL.MAX} - ${TYPE_SCALE.SMALL.MIN}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum font fontSize
        '@pageMaxWidth': {
          fontSize: `${TYPE_SCALE.SMALL.MAX}px`,
        },
        lineHeight: SPACING.VR_BASE,
      },
      tiny: {
        // Minimum font fontSize
        fontSize: `${TYPE_SCALE.TINY.MIN}px`,

        // Dynamic font fontSize
        '@pageMinWidth': {
          fontSize: `calc(${TYPE_SCALE.TINY.MIN}px + (${TYPE_SCALE.TINY.MAX} - ${TYPE_SCALE.TINY.MIN}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
        },

        // Maximum font fontSize
        '@pageMaxWidth': {
          fontSize: `${TYPE_SCALE.TINY.MAX}px`,
        },
        lineHeight: SPACING.VR_BASE,
      },
    },
    typeface: {
      sansSerif: {
        fontFamily: '$sansSerif',
      },
      serif: {
        fontFamily: '$serif',
      },
    },
    typeWeight: {
      regular: {
        fontWeight: '400',
      },
      bold: {
        fontWeight: '700',
        letterSpacing: '0.025em',
      },
    },
  },
  defaultVariants: {
    typeface: 'sansSerif',
    typeSize: 'standard',
    typeWeight: 'regular',
  },
});
