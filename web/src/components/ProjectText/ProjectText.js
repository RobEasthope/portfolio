import styled from 'styled-components';
import { Text } from 'rebass';

import fontSizing from '../../utils/fontsizing';

const ProjectText = styled(Text)`
  font-size: ${fontSizing(20, 24)};
  margin-bottom: 0.5em;
  max-width: 27em;

  img {
    max-width: 100%;
  }
`;

export default ProjectText;
