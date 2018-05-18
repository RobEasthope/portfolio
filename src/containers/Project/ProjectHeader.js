import styled from 'styled-components';

import Imgix from 'react-imgix';

import { breakpoints as bk } from '../../styles/breakpoints';

const PortfolioCardBkg = styled(Imgix)`
  position: relative;
  text-align: center;
  background-image: url('${props => props.bkg}');
  background-size: cover;
  background-position: center center;

  width: 100%;
  height: 70vh;
`;

export default PortfolioCardBkg;
