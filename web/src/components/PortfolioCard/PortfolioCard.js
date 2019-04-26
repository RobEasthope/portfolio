import styled from 'styled-components';
import { Box } from 'rebass';

const PortfolioCard = styled(Box)`
  position: relative;

  .projectThumbnail {
    display: none;
  }

  :hover {
    .projectThumbnail {
      display: block;
    }
  }
`;

export default PortfolioCard;
