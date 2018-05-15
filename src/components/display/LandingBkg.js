import styled from 'styled-components';
import Imgix from 'react-imgix';

const LandingBkg = styled(Imgix)`
  position: relative;
  text-align: center;
  background-image: url('${props => props.bkg}');
  background-size: cover;
  background-position: center center;
  min-height: calc(100vh - 80px);

  @media (min-width: 420px) {
    min-height: calc(100vh - 105px);
  }

  @media (min-width: 1020px) {
    min-height: calc(100vh - 165px);
  }
`;

export default LandingBkg;
