import styled from 'styled-components';
import { Text } from 'rebass';

import { colors } from '../../styles/theme';
import fontSizing from '../../utils/fontsizing';

const FooterText = styled(Text)`
  font-size: ${fontSizing(14, 18)};
  color: ${colors.ink};
`;

export default FooterText;
