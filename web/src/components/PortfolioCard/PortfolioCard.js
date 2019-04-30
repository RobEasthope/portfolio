import styled from 'styled-components';
import { Box } from 'rebass';
import { breakpoints } from '../../styles/theme';
import palette from '../../styles/palette';

const PortfolioCard = styled(Box)`
  position: relative;
  /* padding-bottom: 8px;
  border-bottom: 1px solid ${palette.ink};
  &:last-child {
    border-bottom: 0;
  } */

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
