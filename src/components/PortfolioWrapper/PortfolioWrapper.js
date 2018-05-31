import styled from 'styled-components';
import rem from '../../utils/rem';

const PortfolioWrapper = styled('main')`
  margin-left: -3em;
  margin-right: -3em;
  margin-bottom: 50px;

  @media (min-width: 420px) {
    margin-bottom: -${rem(60)};
  }

  @media (min-width: 1020px) {
    margin-bottom: -${rem(80)};
  }
`;

export default PortfolioWrapper;
