import styled from 'styled-components';
import { Box as rebassBox } from 'rebass';

const Container = styled(rebassBox)`
  padding: 0 10px;
  @media (min-width: 800px) {
    padding: 0 15px;
  }
`;

export default Container;
