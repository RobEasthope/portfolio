import React from 'react';
import styled from 'styled-components';
import { Box, Link } from 'rebass';
import Scrollspy from 'react-scrollspy';

import { breakpoints } from '../../styles/theme';

import Nav from '../Nav/Nav';
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
          items={['portfolio', 'side-projects', 'about']}
          currentClassName="is-current"
        >
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/side-projects">Side projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </Scrollspy>
      </Nav>
    </nav>
  </HeaderWrapper>
);

export default Header;
