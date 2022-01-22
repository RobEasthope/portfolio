import styled from 'styled-components';
import { Text } from 'rebass';

import { colors } from '../../styles/theme';
import fontSizing from '../../utils/fontsizing';

const LandingCaption = styled(Text)`
  font-size: ${fontSizing(12, 16)};
  /* color: white; */
  /* font-style: italic; */
  text-align: right;
  max-width: calc(320px - 2em);
  margin-left: 2rem;

  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 1;

  color: ${colors.ink};
  /* background-color: white; */
  background-color: rgba(255, 255, 255, 1);
  padding: 0.2em 0.4em;
`;

export default LandingCaption;
