import React from 'react';
import styled from 'styled-components';

import { Box } from 'rebass';
import { Link } from 'gatsby';

const Glyph = styled.img`
  width: 36px;
`;
const LogoWrapper = styled(Box)`
  flex: 1;
`;

const Logo = ({ url, src, altText }) => (
  <LogoWrapper as="li" justifySelf="flex-start">
    <Link to={url}>
      <Glyph src={src} alt={altText} />
    </Link>
  </LogoWrapper>
);

export default Logo;
