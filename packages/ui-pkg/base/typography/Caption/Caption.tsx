import { SPACING } from 'ui-pkg/constants/SPACING';
import { styled } from 'ui-pkg/styles/stitches.config';

export const Caption = styled('figcaption', {
  fontSize: '$small',
  lineHeight: SPACING.VR_BASE,
  fontFamily: '$serif',
  marginY: '0',
  fontStyle: 'italic',
  paddingY: '$third',
  paddingX: '$twoThirds',
  color: '$slate10',
});
