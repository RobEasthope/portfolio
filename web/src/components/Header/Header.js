import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

import { breakpoints } from '../../styles/theme';

import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import LogoAsset from '../../images/saladin-logo-dark-with-diamond.svg';
import NavLink from '../NavLink/Navlink';

const HeaderWrapper = styled(Box)`
  position: fixed;
  display: block;
  background-color: white;

  /* @media (min-width: ${breakpoints.md}) {
  } */
`;

const Header = () => (
  <HeaderWrapper as="header">
    <nav>
      <Nav
        as="ul"
        pl="4"
        pr="5"
        pt="48px"
        pb="48px"
        m="0"
        justifyContent="flex-end"
        flexWrap="wrap"
        flexDirection="column"
      >
        <Logo url="/" src={LogoAsset} altText="Rob Easthope" />

        <NavLink to="/portfolio" title="Portfolio" />
        <NavLink to="/side-projects" title="Side projects" />
        <NavLink to="/about" title="About" />
      </Nav>
    </nav>
  </HeaderWrapper>
);

export default Header;
