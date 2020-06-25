import styled from 'styled-components';
import { Link } from 'rebass';

import { colors } from '../../styles/theme';

const TextLink = styled(Link)`
  color: ${colors.ink};
  text-decoration: none;
`;

export default TextLink;
