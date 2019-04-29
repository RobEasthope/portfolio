import styled from 'styled-components';
import { Flex } from 'rebass';

import palette from '../../styles/palette';
import fontSizing from '../../utils/fontsizing';

const Nav = styled(Flex)`
  list-style-type: none;
  /* min-width: 154px; */
  height: 100vh;

  ul {
    list-style-type: none;
    color: ${palette.ink};

    font-size: ${fontSizing(18, 24)};
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
    }
  }
`;

export default Nav;
