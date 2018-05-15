import React from 'react';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import NavLink from './NavLink';

import Shield from './Shield';

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 20px 0;
  max-width: 380px;
  margin: 0 auto;
`;

const Header = () => (
  <HeaderWrapper>
    <Grid>
      <Grid.Unit size={1 / 3}>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </Grid.Unit>

      <Grid.Unit size={1 / 3}>
        <Shield />
      </Grid.Unit>
      <Grid.Unit size={1 / 3}>
        <NavLink to="/about">About</NavLink>
      </Grid.Unit>
    </Grid>
  </HeaderWrapper>
);

export default Header;
