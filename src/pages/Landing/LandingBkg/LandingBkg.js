import styled from 'styled-components'

const LandingBkg = styled.div`
  position: relative;
  text-align: center;
  background-image: url('${props => props.bkg}');
  background-size: cover;
  background-position: center center;
  min-height: calc(100vh - (6em * 2));
`

export default LandingBkg
