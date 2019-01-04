import React from 'react'
import styled from 'styled-components'
import NavLink from '../NavLink/NavLink'

import palette from '../../../styles/colour-palette'

const NavWrapper = styled('nav')`
  text-align: right;

  .active-link {
    border-bottom: 1px solid ${palette.ink};
  }
`

const Nav = () => (
  <NavWrapper>
    <NavLink to="/" exact activeClassName="active-link">
      Portfolio
    </NavLink>
    <NavLink to="/about" exact activeClassName="active-link">
      About me
    </NavLink>
    {/* <NavLink to="/contact" exact activeClassName="active-link">
      Contact
    </NavLink> */}
  </NavWrapper>
)

export default Nav
