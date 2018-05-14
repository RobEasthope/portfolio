import styled from 'styled-components';
import { Link } from 'react-router-dom';

import palette from '../../styles/colour-palette';

const NavLink = styled(Link)`
  display: inline-block;
  font-family: 'hk_grotesklight', serif;
  font-size: 18px;
  color: ${palette.ink};
  text-decoration: none;
  margin: 0 90px;
  padding: 10px;
`;

export default NavLink;
