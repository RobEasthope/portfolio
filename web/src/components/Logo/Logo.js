import React from 'react';
import styled from 'styled-components';

import { Box } from 'rebass';
import { Link } from 'gatsby';

// import { colors } from '../../styles/theme';
// import fontSizing from '../../utils/fontsizing';

const Glyph = styled.img`
  width: 36px;
  background-color: white;
  padding: 3px;
  border-radius: 50%;
`;
const LogoWrapper = styled(Box)`
  flex: 1;
`;

// const SiteTitleText = styled(Link)`
//   display: inline-block;
//   color: ${colors.ink};
//   text-decoration: none;
//   font-size: ${fontSizing(18, 24)};
//   margin-top: 0.5em;
// `;

const Logo = ({ as, url, src, altText }) => (
  <LogoWrapper as={as} justifySelf="flex-start">
    <Link to={url}>
      <Glyph src={src} alt={altText} />
    </Link>
    {/* <div>
      <SiteTitleText>Rob Easthope</SiteTitleText>
    </div> */}
  </LogoWrapper>
);

export default Logo;
