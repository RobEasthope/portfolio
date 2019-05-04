import styled from 'styled-components';
import SanityMuxPlayer from 'sanity-mux-player';

const LandingJumbotron = styled(SanityMuxPlayer)`
  position: relative;
  width: 100%;
  height: 100vh !important;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default LandingJumbotron;
