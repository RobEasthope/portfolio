import React from 'react';
import NavLink from './NavLink';

const Nav = () => (
  <nav>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
);

export default Nav;
