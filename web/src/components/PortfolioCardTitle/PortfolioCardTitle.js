import styled from 'styled-components';
import { Text } from 'rebass';

import palette from '../../styles/palette';

const PortfolioCardTitle = styled(Text)`
  display: inline-block;
  color: ${palette.ink};
  text-decoration: none;
`;

export default PortfolioCardTitle;
