import React from 'react';
import PropTypes from 'prop-types';

import App from '../App/App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppWrapper from '../AppWrapper/AppWrapper';
import MainContent from '../MainContent/MainContent';
import MobileNav from '../MobileNav/MobileNav';

function showFooter(disableFooter) {
  if (disableFooter !== true) {
    return <Footer />;
  }
}

const Layout = ({ disableFooter, landingPageStyling, children }) => (
  <App>
    <AppWrapper flexDirection="column">
      <MobileNav landingPageStyling={landingPageStyling}></MobileNav>
      <Header />
      <MainContent>{children}</MainContent>
      {showFooter(disableFooter)}
    </AppWrapper>
  </App>
);

Layout.propTypes = {
  disableFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
