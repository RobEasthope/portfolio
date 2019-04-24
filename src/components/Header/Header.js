import React from 'react';

import Nav from '../Nav/Nav';
import NavLink from '../NavLink/Navlink';
import Logo from '../Logo/Logo';

import LogoAsset from '../../images/saladin-logo-dark-with-diamond.svg';

const Header = () => (
  <header>
    <nav>
      <Nav as="ul" px="2" py="4" alignItems="center" justifyContent="center">
        <NavLink to="/portfolio" title="Portfolio" textAlign="right" />
        <Logo url="/" src={LogoAsset} altText="Rob Easthope" />
        <NavLink to="/about" title="About" textAlign="left" />
      </Nav>
    </nav>
  </header>
);

export default Header;
