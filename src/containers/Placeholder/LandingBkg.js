import styled from 'styled-components';
import Imgix from 'react-imgix';

const LandingBkg = styled(Imgix)`
  position: relative;
  text-align: center;
  background-image: url('${props => props.bkg}');
  background-size: cover;
  background-position: center center;
  min-height: calc(100vh - 100px);
`;

export default LandingBkg;
