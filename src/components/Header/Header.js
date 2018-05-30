import React from 'react';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import NavLink from './NavLink';

import Shield from './Shield';

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 20px 80px 20px;
  max-width: 100%;
  margin: 0 auto;
`;

const Header = () => (
  <HeaderWrapper>
    <Grid>
      <Grid.Unit size={1 / 2} style={{ textAlign: 'left' }}>
        <Shield />
        <NavLink to="/">Rob Easthope</NavLink>
      </Grid.Unit>

      <Grid.Unit size={1 / 2} style={{ textAlign: 'right' }}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Grid.Unit>
    </Grid>
  </HeaderWrapper>
);

export default Header;
