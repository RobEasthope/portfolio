import styled from 'styled-components';
import { Link } from 'rebass';

import palette from '../../styles/palette';
import fontSizing from '../../utils/fontsizing';

const FooterLink = styled(Link)`
  font-size: ${fontSizing(18, 24)};
  color: ${palette.ink};
`;

export default FooterLink;
