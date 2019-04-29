import styled from 'styled-components';
import { Box } from 'rebass';
import { breakpoints } from '../../styles/theme';

const PortfolioCard = styled(Box)`
  position: relative;

  .projectThumbnail {
    display: none;
    visibility: hidden;
  }

  @media (min-width: ${breakpoints.md}) {
    .projectThumbnail {
      display: block;
    }
    &:hover {
      .projectThumbnail {
        visibility: visible;
      }
    }
  }
`;

export default PortfolioCard;
