import styled from 'styled-components';
import SanityMuxPlayer from 'sanity-mux-player';

import { breakpoints } from '../../styles/theme';

const LandingJumbotron = styled(SanityMuxPlayer)`
  position: relative;
  width: 100%;
  height: 100vh !important;
  overflow: hidden;

  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: block;
  }

  video {
    /* position: absolute;
    top: 50%;
    transform: translateY(-50%); */
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }
`;

export default LandingJumbotron;
