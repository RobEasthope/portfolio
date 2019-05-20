import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Scrollspy from 'react-scrollspy';

import { breakpoints } from '../../styles/theme';

import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
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
        <Scrollspy
          items={['portfolio', 'about', 'contact']}
          currentClassName="is-current"
        >
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
        </Scrollspy>
      </Nav>
    </nav>
  </HeaderWrapper>
);

export default Header;
