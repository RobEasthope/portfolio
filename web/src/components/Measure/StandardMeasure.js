import styled from 'styled-components';
import { Box as rebassBox } from 'rebass';

import { measure } from '../../styles/theme';

const StandardMeasure = styled(rebassBox)`
  max-width: ${measure.standard};
`;

export default StandardMeasure;
