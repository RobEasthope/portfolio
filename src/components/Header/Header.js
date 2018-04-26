import React from 'react';
import Nav from './Nav';
import Shield from './Shield';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 20px 0;
`;

const Header = () => (
  <HeaderWrapper>
    <Shield />
    {/* <Nav /> */}
  </HeaderWrapper>
);

export default Header;
