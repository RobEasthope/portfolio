import styled from 'styled-components';
import { Text } from 'rebass';

import { colors } from '../../styles/theme';
import fontSizing from '../../utils/fontsizing';

const PortfolioCardTitle = styled(Text)`
  display: inline-block;
  font-size: ${fontSizing(32, 72)};
  color: ${colors.ink};
  text-decoration: none;
`;

export default PortfolioCardTitle;
