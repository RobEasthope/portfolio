import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

import Shield from './Shield';

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 30px 0;
`;

const Header = () => (
  <HeaderWrapper>
    <NavLink to="/portfolio">Portfolio</NavLink>
    <Shield />
    <NavLink to="/about">About</NavLink>
  </HeaderWrapper>
);

export default Header;
