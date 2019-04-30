import styled from 'styled-components';
import { Box } from 'rebass';
import { breakpoints } from '../../styles/theme';
import palette from '../../styles/palette';

const PortfolioCard = styled(Box)`
  border-bottom: 1px solid #ececec;
  &:last-child {
    border-bottom: 0;
  }

  .projectThumbnail {
    border-radius: 50%;
  }
`;

export default PortfolioCard;
