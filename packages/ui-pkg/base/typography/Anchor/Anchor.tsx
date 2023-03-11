import { styled } from 'ui-pkg/styles/stitches.config';

export const Anchor = styled('a', {
  color: 'inherit',
  textDecoration: 'none',
  transition: 'color 0.4s ease-in-out',

  '&:hover': {
    color: '$highlight',
  },
});
