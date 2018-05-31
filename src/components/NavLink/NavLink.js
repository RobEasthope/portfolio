import React from 'react';
import styled from 'styled-components';
import { NavLink as RRNavLink } from 'react-router-dom';

import palette from '../../styles/colour-palette';

const NavLink = styled(RRNavLink)`
  display: inline-block;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: ${palette.ink};
  text-decoration: none;
  margin-left: 1.25em;

  :hover {
    color: #e75b4c;
    transition: 0.4s ease-in-out;
  }
`;

export default NavLink;
