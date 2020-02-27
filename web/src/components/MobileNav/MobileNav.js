import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ReactModal from 'react-modal';
import { Box, Button, Flex } from 'rebass';
import { IoIosMenu, IoMdClose } from 'react-icons/io';

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
  z-index: 4;
`;

const MobileNavBtn = styled(Button)`
  border: none;
  padding: 1em;
  background-color: transparent;
  color: ${colors.ink};

  svg {
    width: ${fontSizing(24, 32)};
    height: ${fontSizing(24, 32)};
  }
`;

const HeaderWrapper = styled(Box)`
  display: block;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }

  position: relative;

  ${props =>
    props.landingPageStyling &&
    css`
      position: absolute;
      z-index: 3;
      /* background-color: white; */
      padding-bottom: 1rem;
    `}
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

function mobileNavLogo(openMobileNav, closeMobileNav, mobileNavOpen) {
  if (mobileNavOpen) {
    return (
      <MobileNavBtn type="button" onClick={closeMobileNav}>
        <IoMdClose />
      </MobileNavBtn>
    );
  }
  return (
    <MobileNavBtn type="button" onClick={openMobileNav}>
      <IoIosMenu />
    </MobileNavBtn>
  );
}

const MobileNav = ({ landingPageStyling }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobileNav = () => {
    setMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <HeaderWrapper as="header" landingPageStyling={landingPageStyling}>
      <Flex width="100vw" pl="3" pr="3" pt="3">
        <Logo
          as="div"
          url="/"
          src={LogoAsset}
          altText="Rob Easthope"
          landingPageStyling={landingPageStyling}
        />

        {mobileNavLogo(openMobileNav, closeMobileNav, mobileNavOpen)}
      </Flex>

      <MobileModal
        isOpen={mobileNavOpen}
        contentLabel="Navigation"
        onRequestClose={closeMobileNav}
        ariaHideApp={false}
      >
        <nav>
          <MobileNavList
            as="ul"
            pl="1em"
            pr="0"
            pt={5}
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
            <NavLink to="/contact" title="Contact" />
          </MobileNavList>
        </nav>
      </MobileModal>
    </HeaderWrapper>
  );
};

export default MobileNav;
