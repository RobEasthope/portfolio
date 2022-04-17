import { SPACING } from '~/UI/constants/SPACING';
import { styled } from '~/UI/styles/stitches.config';

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
