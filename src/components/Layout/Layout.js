import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Flex, Box } from 'rebass';

import theme from '../../styles/theme';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      <Flex flexWrap="wrap" flexDirection="row">
        <Box width={[1]}>
          <Header />
        </Box>
        <Box width={1}>
          <main>{children}</main>
        </Box>
        <Box width={1} alignSelf="flex-end">
          <Footer />
        </Box>
      </Flex>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
