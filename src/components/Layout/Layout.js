import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Box } from 'rebass';

import theme from '../../styles/theme';
import GlobalStyles from '../../styles/globalStyles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppWrapper from '../Grid/AppWrapper';
import MainContent from '../Grid/MainContent';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      <GlobalStyles />
      <AppWrapper flexDirection="column">
        <Box width={1}>
          <Header />
        </Box>
        <MainContent width={1}>
          <main>{children}</main>
        </MainContent>
        {/* <Box width={1} alignSelf="flex-end">
          <Footer />
        </Box> */}
      </AppWrapper>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
