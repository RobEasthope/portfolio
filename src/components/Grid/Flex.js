import styled from 'styled-components';
import { Flex as rebassFlex } from 'rebass';

const Flex = styled(rebassFlex)`
  margin: 0 -10px;

  @media (min-width: 800px) {
    margin: 0 -15px;
  }
`;

export default Flex;
