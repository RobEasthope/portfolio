import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Shield from './Shield';

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 20px 0;
`;

const Header = () => (
  <HeaderWrapper>
    <Shield />
    <Nav />
  </HeaderWrapper>
);

export default Header;
