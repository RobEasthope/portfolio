import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import theme from '../../styles/theme';
import GlobalStyles from '../../styles/globalStyles';

const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/ysa1zoi.css" />
      </Helmet>
      <Normalize />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
