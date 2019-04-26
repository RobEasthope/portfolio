import styled from 'styled-components';
import Image from 'gatsby-image';

import breakpoints from '../../styles/theme';

const LandingJumbotron = styled(Image)`
  max-width: 100vw;
  @media (min-width: ${breakpoints.md}) {
    max-width: calc(100vw - 186px);
  }
  height: 100vh;
`;

export default LandingJumbotron;
