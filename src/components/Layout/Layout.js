import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'rebass';

import App from '../App/App';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppWrapper from '../Grid/AppWrapper';
import MainContent from '../Grid/MainContent';

const Layout = ({ children, footer }) => (
  <App>
    <AppWrapper flexDirection="column">
      <Box width={1}>
        <Header />
      </Box>
      <MainContent>{children}</MainContent>

      {/* Toggle footer */}
      {footer && (
        <Box p="4" alignSelf="flex-end">
          <Footer />
        </Box>
      )}
    </AppWrapper>
  </App>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
