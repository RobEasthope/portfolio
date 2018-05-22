import styled from 'styled-components';

const PortfolioWrapper = styled('main')`
  ${''} margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  @media (min-width: 420px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: 1020px) {
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 80px;
  }
`;

export default PortfolioWrapper;
