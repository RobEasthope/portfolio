import styled from 'styled-components';
import { Box } from 'rebass';

const PortfolioCard = styled(Box)`
  position: relative;

  .projectThumbnail {
    visibility: hidden;
  }

  :hover {
    .projectThumbnail {
      visibility: visible;
    }
  }
`;

export default PortfolioCard;
