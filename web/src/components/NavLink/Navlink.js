import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from 'rebass';
import { breakpoints, colors } from '../../styles/theme';
import fontSizing from '../../utils/fontsizing';

const NavLinkText = styled(Link)`
  color: ${colors.ink};
  text-decoration: none;
  font-size: ${fontSizing(21, 24)};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${fontSizing(18, 24)};
  }
`;

const NavLink = ({ to, title }) => (
  <Text as="li" width={1} mt="3">
    <NavLinkText to={to} activeStyle={{ color: colors.typographyRed }}>
      {title}
    </NavLinkText>
  </Text>
);

NavLink.defaultProps = {
  to: '',
  title: '',
};

NavLink.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
};

export default NavLink;
