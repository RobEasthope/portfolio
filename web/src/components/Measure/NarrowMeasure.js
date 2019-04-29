import styled from 'styled-components';
import { Box as rebassBox } from 'rebass';

import { measure } from '../../styles/theme';

const NarrowMeasure = styled(rebassBox)`
  max-width: ${measure.narrow};
`;

export default NarrowMeasure;
