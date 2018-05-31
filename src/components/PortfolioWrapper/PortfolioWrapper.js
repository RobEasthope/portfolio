import styled from 'styled-components';
import rem from '../../utils/rem';

const PortfolioWrapper = styled('main')`
  margin-left: -${rem(40)};
  margin-right: -${rem(40)};
  margin-bottom: 50px;

  @media (min-width: 420px) {
    margin-bottom: -${rem(60)};
  }

  @media (min-width: 1020px) {
    margin-bottom: -${rem(80)};
  }
`;

export default PortfolioWrapper;
