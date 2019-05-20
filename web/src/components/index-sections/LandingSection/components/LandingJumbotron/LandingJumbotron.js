import styled from 'styled-components';
import Image from 'gatsby-image';

import { breakpoints } from '../../../../../styles/theme';

const LandingJumbotron = styled(Image)`
  display: block;
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
  width: 100%;
  height: 100vh;
`;

export default LandingJumbotron;
