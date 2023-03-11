import { Spacer as rawSpacerProps } from 'ui-pkg/types/sanity-schema';
import { SPACING } from 'ui-pkg/constants/SPACING';
import { styled } from 'ui-pkg/styles/stitches.config';
import { Box } from 'ui-pkg/base/structure/Box/Box';

// STYLES
const StyledSpacer = styled(Box, {
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

// TYPES
export type SpacerProps = Pick<rawSpacerProps, 'height'>;

// MARKUP
export const Spacer = ({ height }: SpacerProps) => (
  <StyledSpacer height={height} />
);

export default Spacer;