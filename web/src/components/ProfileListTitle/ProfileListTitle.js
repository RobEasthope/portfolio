import styled from 'styled-components';
import { Text } from 'rebass';

import fontSizing from '../../utils/fontsizing';

const ProfileListTitle = styled(Text)`
  font-size: ${fontSizing(20, 24)};
  margin-bottom: 1em;
  text-decoration: underline;
`;

export default ProfileListTitle;
