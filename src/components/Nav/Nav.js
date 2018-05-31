import React from 'react';
import styled from 'styled-components';

import NavLink from '../NavLink/NavLink';

const NavWrapper = styled('nav')`
  text-align: right;
`;

const Nav = () => (
  <NavWrapper>
    <NavLink to="/">Portfolio</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </NavWrapper>
);

export default Nav;
