import React from 'react';
import styled from 'styled-components';

import { Box, Text } from 'rebass';
import { Link } from 'gatsby';
import { breakpoints, colors } from '../../styles/theme';

import fontSizing from '../../utils/fontsizing';

// const Glyph = styled.img`
//   width: 36px;
//   background-color: white;
//   padding: 3px;
//   border-radius: 50%;
// `;

const LogoWrapper = styled(Box)`
  flex: 1;
  padding: 1em;
  @media (min-width: ${breakpoints.md}) {
    padding: 0;
  }
`;

const SiteTitleText = styled(Text)`
  display: inline-block;
  color: ${colors.ink};
  text-decoration: none;
  font-size: ${fontSizing(18, 24)};
`;

const Logo = ({ as, url, src, altText }) => (
  <LogoWrapper as={as} justifySelf="flex-start">
    <Link to={url}>
      <SiteTitleText>Rob Easthope</SiteTitleText>
    </Link>
  </LogoWrapper>
);

export default Logo;
