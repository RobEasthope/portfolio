import { SPACING } from '@/UI/constants/SPACING';
import { styled } from '@/UI/styles/stitches.config';
import { Box } from '@/UI/base/layout/Box/Box';

export const Spacer = styled(Box, {
  width: '100%',

  variants: {
    height: {
      quarter: { height: `calc(${SPACING.VR_BASE} / 4)` },
      third: { height: `calc(${SPACING.VR_BASE} / 3)` },
      twoThirds: { height: `calc(${SPACING.VR_BASE} * 0.666)` },
      half: { height: `calc(${SPACING.VR_BASE} / 2)` },
      x1: { height: SPACING.VR_BASE },
      x2: { height: `calc(${SPACING.VR_BASE} * 2)` },
      x3: { height: `calc(${SPACING.VR_BASE} * 3)` },
      x4: { height: `calc(${SPACING.VR_BASE} * 4)` },
      x5: { height: `calc(${SPACING.VR_BASE} * 5)` },
    },
  },
});
