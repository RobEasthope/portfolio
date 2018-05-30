import styled from 'styled-components';
import { Link } from 'react-router-dom';

import palette from '../../styles/colour-palette';

const NavLink = styled(Link)`
  display: inline-block;
  font-family: 'Sorts Mill Goudy', serif;
  color: ${palette.ink};
  text-decoration: none;
  padding: 10px;
`;

export default NavLink;
