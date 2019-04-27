import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

import { breakpoints } from '../../styles/theme';

import Nav from '../Nav/Nav';
import NavLink from '../NavLink/Navlink';
import Logo from '../Logo/Logo';

import LogoAsset from '../../images/saladin-logo-dark-with-diamond.svg';

const HeaderWrapper = styled(Box)`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    position: fixed;
    display: block;
  }
`;

const Header = () => (
  <HeaderWrapper as="header">
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
        <NavLink to="/#portfolio" title="Portfolio" />
        <NavLink to="/#about" title="About" />
        <NavLink to="/#contact" title="Contact" />
      </Nav>
    </nav>
  </HeaderWrapper>
);

export default Header;
