import { styled } from 'ui-pkg/styles/stitches.config';

// STYLES
export const BlurredImage = styled('img', {
  display: 'block',
  position: 'static',

  variants: {
    visibility: {
      show: {
        opacity: 1,
      },
      hide: {
        opacity: 0,
      },
    },
  },
});
