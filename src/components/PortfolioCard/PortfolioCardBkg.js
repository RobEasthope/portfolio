import styled from 'styled-components';
import Imgix from 'react-imgix';

const PortfolioCardBkg = styled(Imgix)`
  position: relative;
  text-align: center;
  background-image: url('${props => props.bkg}');
  background-size: cover;
  background-position: center center;

  height: 0;
  padding-bottom: 100%;
`;

export default PortfolioCardBkg;
