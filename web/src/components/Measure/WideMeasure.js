import styled from 'styled-components';
import { Box as rebassBox } from 'rebass';

import { measure } from '../../styles/theme';

const WideMeasure = styled(rebassBox)`
  max-width: ${measure.wide};
`;

export default WideMeasure;
