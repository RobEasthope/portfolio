import styled from 'styled-components';
import { Text } from 'rebass';

import { colors } from '../../styles/theme';
import fontSizing from '../../utils/fontsizing';

const PortfolioCardDescription = styled(Text)`
  display: inline-block;
  font-size: ${fontSizing(20, 24)};
  color: ${colors.ink};
  text-decoration: none;
`;

export default PortfolioCardDescription;
