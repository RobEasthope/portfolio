import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import Header from '../Header/Header';
import MobileMenu from '../MobileMenu/MobileMenu';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div id="outer-container">
      <MobileMenu pageWrapId="page-wrap" outerContainerId="outer-container" />
      <div id="page-wrap">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
