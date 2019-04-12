import React from 'react';
import styled from 'styled-components';

import { Box } from 'rebass';
import { Link } from 'gatsby';

const Glyph = styled.img`
  width: 36px;
`;
const LogoWrapper = styled(Box)`
  margin: 0 16px;
  @media (min-width: 800px) {
    margin: 0 120px;
  }
`;

const Logo = ({ url, src, altText }) => (
  <LogoWrapper as="li">
    <Link to={url}>
      <Glyph src={src} alt={altText} />
    </Link>
  </LogoWrapper>
);

export default Logo;
