import styled from 'styled-components';
import { Text } from 'rebass';

import palette from '../../styles/palette';
import fontSizing from '../../utils/fontsizing';

const PortfolioCardTitle = styled(Text)`
  display: inline-block;
  font-size: ${fontSizing(32, 72)};
  color: ${palette.ink};
  text-decoration: none;
`;

export default PortfolioCardTitle;
