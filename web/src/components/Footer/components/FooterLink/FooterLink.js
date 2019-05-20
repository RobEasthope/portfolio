import styled from 'styled-components';
import { Link } from 'rebass';

import { colors } from '../../../../styles/theme';
import fontSizing from '../../../../utils/fontsizing';

const FooterLink = styled(Link)`
  font-size: ${fontSizing(18, 24)};
  color: ${colors.ink};
`;

export default FooterLink;
