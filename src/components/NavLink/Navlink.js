import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from 'rebass';
import palette from '../../styles/palette';
import fontSizing from '../../utils/fontsizing';

const NavLinkText = styled(Link)`
  color: ${palette.ink};
  font-weight: bold;
  text-decoration: none;
  /* font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1680 - 320))); */
  font-size: ${fontSizing(18, 24)};
`;

const NavLink = ({ to, title }) => (
  <Text as="li" width={1} mt="3">
    <NavLinkText to={to}>{title}</NavLinkText>
  </Text>
);

export default NavLink;
