import styled from 'styled-components';
import { Flex } from 'rebass';

import palette from '../../styles/palette';
import fontSizing from '../../utils/fontsizing';

const Nav = styled(Flex)`
  list-style-type: none;
  height: 100vh;

  ul {
    list-style-type: none;
    color: ${palette.ink};

    font-size: ${fontSizing(18, 24)};
    margin: 0;
    padding: 0;

    a {
      display: inline-block;
      text-decoration: none;
      margin-top: 0.5em;
    }
  }
`;

export default Nav;
