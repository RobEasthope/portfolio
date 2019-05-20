import styled from 'styled-components';
import { Text } from 'rebass';

const LandingTagline = styled(Text)`
  color: white;
  max-width: 11em;
  line-height: 1;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export default LandingTagline;
