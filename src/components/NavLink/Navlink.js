import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from 'rebass';

const NavLinkText = styled(Link)`
  display: inline-block;
  color: black;
  font-family: 'Gotham', sans-serif;
  font-weight: bold;
  /* transform: translateY(-15%); */
  text-transform: uppercase;
  text-decoration: none;
`;

const NavLink = ({ to, title, textAlign }) => (
  <Text as="li" width={1 / 2} textAlign={textAlign}>
    <NavLinkText to={to}>{title}</NavLinkText>
  </Text>
);

export default NavLink;
