import styled from 'styled-components';
import { Box } from 'rebass';
import { breakpoints } from '../../styles/theme';
import palette from '../../styles/palette';

const PortfolioCard = styled(Box)`
  /* border-bottom: 1px solid #ececec; */
  border-bottom: 1px solid ${palette.ink};
  &:first-child {
    border-top: 1px solid ${palette.ink};
    /* border-bottom: 0; */
  }

  .projectThumbnail {
    display: none;
    border-radius: 50%;
  }

  @media (min-width: ${breakpoints.md}) {
    .projectThumbnail {
      display: block;
    }
  }
`;

export default PortfolioCard;
