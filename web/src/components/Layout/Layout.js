import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'rebass';

import App from '../App/App';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppWrapper from '../Grid/AppWrapper';
import MainContent from '../Grid/MainContent';

const Layout = ({ children }) => (
  <App>
    <AppWrapper flexDirection="column">
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </AppWrapper>
  </App>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
