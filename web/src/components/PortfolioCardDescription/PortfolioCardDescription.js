import styled from 'styled-components';
import { Text } from 'rebass';

import palette from '../../styles/palette';
import fontSizing from '../../utils/fontsizing';

const PortfolioCardDescription = styled(Text)`
  display: inline-block;
  font-size: ${fontSizing(20, 24)};
  color: ${palette.ink};
  text-decoration: none;
`;

export default PortfolioCardDescription;
