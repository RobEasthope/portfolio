import styled from 'styled-components';
import { Text } from 'rebass';

import fontSizing from '../../utils/fontsizing';
import { measure } from '../../styles/theme';

const ProjectText = styled(Text)`
  font-size: ${fontSizing(20, 24)};
  margin-bottom: 0.5em;
  max-width: ${measure.wide};
`;

export default ProjectText;
