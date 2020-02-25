import styled from 'styled-components';
import { Link } from 'rebass';

import { colors } from '../../styles/theme';
import fontSizing from '../../utils/fontsizing';

const FooterLink = styled(Link)`
  font-size: ${fontSizing(24, 32)};
  color: ${colors.ink};
  text-decoration: none;
`;

export default FooterLink;
