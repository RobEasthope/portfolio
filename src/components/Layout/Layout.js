import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import Header from '../Header/Header';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <main>{children}</main>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
