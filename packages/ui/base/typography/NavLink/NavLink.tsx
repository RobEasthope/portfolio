import { styled } from '@/UI/styles/stitches.config';
import { Text } from '@/UI/base/typography/Text/Text';

export const NavLink = styled(Text, {
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },

  '&:hover': {
    color: '$highlight',
  },
});
