import { styled } from '~/UI/styles/stitches.config';
import { Text } from '~/UI/base/typography/Text/Text';

export const NavLink = styled(Text, {
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
  },

  '&:hover': {
    color: '$highlight',
  },
});
