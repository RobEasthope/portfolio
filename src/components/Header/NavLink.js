import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import palette from '../../styles/colour-palette';

const NavLink = styled(Link)`
  font-family: 'Sorts Mill Goudy', serif;
  color: ${palette.ink};
  text-decoration: none;
  margin: 0 40px;
`;

export default NavLink;
