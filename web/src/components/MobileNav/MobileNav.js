import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Box, Button, Flex } from 'rebass';

import { breakpoints, colors } from '../../styles/theme';
import fontSizing from '../../utils/fontsizing';

import Logo from '../Logo/Logo';
import LogoAsset from '../../images/saladin-logo-dark-with-diamond.svg';
import NavLink from '../NavLink/Navlink';

const MobileModal = styled(ReactModal)`
  border: none;
  padding: 1rem;
  background-color: white;
  height: 100vh;
`;

const MobileNavBtn = styled(Button)`
  border: none;
  padding: 0;
  background-color: white;
  color: ${colors.ink};
`;

const HeaderWrapper = styled(Box)`
  display: block;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const MobileNavList = styled(Box)`
  list-style-type: none;

  ul {
    list-style-type: none;
    color: ${colors.ink};

    font-size: ${fontSizing(18, 24)};
    margin: 0;
    padding: 0;

    a {
      color: ${colors.ink};
      display: inline-block;
      text-decoration: none;
      margin-top: 0.5em;
    }
  }
`;

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobileNav = () => {
    setMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <HeaderWrapper as="header">
      <Flex width="100vw" pl="3" pr="3" pt="3">
        <Logo as="div" url="/" src={LogoAsset} altText="Rob Easthope" />

        <MobileNavBtn type="button" onClick={openMobileNav}>
          Open
        </MobileNavBtn>
      </Flex>

      <MobileModal
        isOpen={mobileNavOpen}
        contentLabel="Navigation"
        onRequestClose={closeMobileNav}
        ariaHideApp={false}
      >
        <nav>
          <Flex width="100%" pb="3">
            <Logo as="span" url="/" src={LogoAsset} altText="Rob Easthope" />

            <MobileNavBtn type="button" onClick={closeMobileNav}>
              Close
            </MobileNavBtn>
          </Flex>

          <MobileNavList
            as="ul"
            pl="0"
            pr="0"
            pt="0"
            pb="48px"
            m="0"
            justifyContent="flex-start"
            flexWrap="wrap"
            flexDirection="row"
          >
            <NavLink to="/" title="Home" />
            <NavLink to="/portfolio" title="Portfolio" />
            <NavLink to="/side-projects" title="Side projects" />
            <NavLink to="/about" title="About" />
          </MobileNavList>
        </nav>
      </MobileModal>
    </HeaderWrapper>
  );
};

export default Header;
