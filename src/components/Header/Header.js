import React from 'react';

import Nav from '../Nav/Nav';
import NavLink from '../NavLink/Navlink';
import Logo from '../Logo/Logo';

import LogoAsset from '../../images/saladin-logo-dark-with-diamond.svg';

const Header = () => (
  <header>
    <nav>
      <Nav
        as="ul"
        // px="4"
        pl="4"
        pr="5"
        py="4"
        m="0"
        // alignItems="center"
        justifyContent="flex-end"
        flexWrap="wrap"
        flexDirection="column"
      >
        <Logo url="/" src={LogoAsset} altText="Rob Easthope" />
        <NavLink to="/portfolio" title="Portfolio" />
        <NavLink to="/about" title="About" />
      </Nav>
    </nav>
  </header>
);

export default Header;
