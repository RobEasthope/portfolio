import styled from 'styled-components';
import { Box } from 'rebass';
import { breakpoints } from '../../styles/theme';
import { colors } from '../../styles/theme';

const PortfolioCard = styled(Box)`
  border-bottom: 1px solid ${colors.ink};
  &:last-child {
    border-bottom: 0;
  }

  .projectThumbnail {
    display: none;
  }

  @media (min-width: ${breakpoints.md}) {
    .projectThumbnail {
      display: block;
    }
  }
`;

export default PortfolioCard;
