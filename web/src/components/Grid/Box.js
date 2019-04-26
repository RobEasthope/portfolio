import styled from 'styled-components';
import { Box as rebassBox } from 'rebass';
import breakpoints from '../../styles/theme';

const Box = styled(rebassBox)`
  padding: 0 10px;
  @media (min-width: ${breakpoints.md}) {
    padding: 0 15px;
  }
`;

export default Box;
