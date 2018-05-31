import React from 'react';
import styled from 'styled-components';
import Grid from 'styled-components-grid';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

const HeaderWrapper = styled.header`
  padding: 20px 0 20px;
  max-width: 100%;
  margin: 0 auto;
`;

const Header = () => (
  <HeaderWrapper>
    <Grid>
      <Grid.Unit size={1 / 2}>
        <Logo />
      </Grid.Unit>

      <Grid.Unit size={1 / 2}>
        <Nav />
      </Grid.Unit>
    </Grid>
  </HeaderWrapper>
);

export default Header;
