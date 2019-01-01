import styled from 'styled-components';
import { Link } from 'react-router-dom';

import palette from '../../../../styles/colour-palette';

const PortfolioCardLink = styled(Link)`
  &:hover {
    color: ${palette.ink};
    transform: scale(0.98);
  }
`;

export default PortfolioCardLink;
