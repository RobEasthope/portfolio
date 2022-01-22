import styled from 'styled-components';
import SanityMuxPlayer from 'sanity-mux-player';

const LandingJumbotron = styled(SanityMuxPlayer)`
  position: relative;
  width: 100%;
  height: calc(100vh - 2em) !important;
  overflow: hidden;

  video {
    width: 100%;
    height: calc(100vh - 2em) !important;
    object-fit: cover;
    object-position: center;
  }
`;

export default LandingJumbotron;
