import styled from 'styled-components';
import { Box } from 'rebass';

import fontSizing from '../../utils/fontsizing';

const PortfolioCardThumbnail = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;

  display: block;
  width: ${fontSizing(32, 72)};
  height: ${fontSizing(32, 72)};
  transform: translateX(-125%);

  .projectThumbnail {
    border-radius: 50%;
  }
`;

export default PortfolioCardThumbnail;
