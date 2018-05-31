import styled from 'styled-components';

const PortfolioWrapper = styled('main')`
  margin-top: -10px;
  margin-left: -50px;
  margin-right: -50px;
  margin-bottom: 10px;

  @media (min-width: 420px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1020px) {
    margin-bottom: 80px;
  }
`;

export default PortfolioWrapper;
