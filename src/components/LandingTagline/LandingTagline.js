import styled from 'styled-components';
import { Text } from 'rebass';

const LandingTagline = styled(Text)`
  color: white;
  font-weight: bold;
  max-width: 10em;
  /* margin: 30px; */
  line-height: 1;
  /* text-shadow: 0px 0px 6px rgba(1, 255, 233, 1); */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default LandingTagline;
