import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from 'rebass';
import palette from '../../styles/palette';

const NavLinkText = styled(Link)`
  display: inline-block;
  color: ${palette.ink};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;

const NavLink = ({ to, title, textAlign }) => (
  <Text as="li" width={1 / 2} textAlign={textAlign}>
    <NavLinkText to={to}>{title}</NavLinkText>
  </Text>
);

export default NavLink;
