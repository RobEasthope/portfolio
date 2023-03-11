import { styled } from 'ui-pkg/styles/stitches.config';
import { Box } from 'ui-pkg/base/structure/Box/Box';
import { SPACING } from 'ui-pkg/constants/SPACING';

export const Grid = styled(Box, {
  display: 'grid',

  variants: {
    align: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
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
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    flow: {
      row: {
        gridAutoFlow: 'row',
      },
      column: {
        gridAutoFlow: 'column',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      rowDense: {
        gridAutoFlow: 'row dense',
      },
      columnDense: {
        gridAutoFlow: 'column dense',
      },
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateColumns: 'repeat(5, 1fr)',
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
    gapX: {
      quarter: { columnGap: `calc(${SPACING.VR_BASE} / 4)` },
      third: { columnGap: `calc(${SPACING.VR_BASE} / 3)` },
      twoThirds: { columnGap: `calc(${SPACING.VR_BASE} * 0.666)` },
      half: { columnGap: `calc(${SPACING.VR_BASE} / 2)` },
      x1: { columnGap: SPACING.VR_BASE },
      x2: { columnGap: `calc(${SPACING.VR_BASE} * 2)` },
      x3: { columnGap: `calc(${SPACING.VR_BASE} * 3)` },
      x4: { columnGap: `calc(${SPACING.VR_BASE} * 4)` },
      x5: { columnGap: `calc(${SPACING.VR_BASE} * 5)` },
    },
    gapY: {
      quarter: { rowGap: `calc(${SPACING.VR_BASE} / 4)` },
      third: { rowGap: `calc(${SPACING.VR_BASE} / 3)` },
      twoThirds: { rowGap: `calc(${SPACING.VR_BASE} * 0.666)` },
      half: { rowGap: `calc(${SPACING.VR_BASE} / 2)` },
      x1: { rowGap: SPACING.VR_BASE },
      x2: { rowGap: `calc(${SPACING.VR_BASE} * 2)` },
      x3: { rowGap: `calc(${SPACING.VR_BASE} * 3)` },
      x4: { rowGap: `calc(${SPACING.VR_BASE} * 4)` },
      x5: { rowGap: `calc(${SPACING.VR_BASE} * 5)` },
    },
  },
});
