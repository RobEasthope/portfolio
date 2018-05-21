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

  margin-left: 10px;
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

export default LandingBkg;
