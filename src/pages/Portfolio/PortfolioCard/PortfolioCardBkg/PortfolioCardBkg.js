import styled from "styled-components";

import { breakpoints as bk } from "../../../../styles/breakpoints";

const PortfolioCardBkg = styled.div`
  position: relative;
  text-align: center;
  background-color: white;
  background-image: url('${props => props.bkg}');
  background-size: cover;
  background-position: center center;
  margin-bottom: 1rem;

  width: 100%;
  height: 0;
  padding-bottom: 20%;

  @media (min-width: ${bk.sm}px) {
    padding-bottom: 40%;
  }

  @media (min-width: ${bk.md}px) {
    padding-bottom: 100%;
  }
`;

export default PortfolioCardBkg;
