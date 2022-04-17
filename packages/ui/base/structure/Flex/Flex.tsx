import { styled } from '~/UI/styles/stitches.config';
import { SPACING } from '~/UI/constants/SPACING';
import { Box } from '~/UI/base/structure/Box/Box';

export const Flex = styled(Box, {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      quarter: { gap: `calc(${SPACING.VR_BASE} / 4)` },
      third: { gap: `calc(${SPACING.VR_BASE} / 3)` },
      twoThirds: { gap: `calc(${SPACING.VR_BASE} * 0.666)` },
      half: { gap: `calc(${SPACING.VR_BASE} / 2)` },
      x1: { gap: SPACING.VR_BASE },
      x2: { gap: `calc(${SPACING.VR_BASE} * 2)` },
      x3: { gap: `calc(${SPACING.VR_BASE} * 3)` },
      x4: { gap: `calc(${SPACING.VR_BASE} * 4)` },
      x5: { gap: `calc(${SPACING.VR_BASE} * 5)` },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
});
