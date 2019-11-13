import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

import App from '../App/App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppWrapper from '../AppWrapper/AppWrapper';
import MainContent from '../MainContent/MainContent';

function showFooter(disableFooter) {
  if (disableFooter !== true) {
    return <Footer />;
  }
}

const Layout = ({ disableFooter, children }) => {
  const mql = window.matchMedia(`(min-width: 800px)`);

  const [sidebarOpen, setSideBarOpen] = useState(mql.matches);

  // function toggleSidebar() {
  //   useEffect(() => {
  //     if (sidebarOpen) {
  //       setSideBarOpen(false);
  //     } else {
  //       setSideBarOpen(true);
  //     }
  //   }, []);
  // }
  mql.addListener(responsiveSidebar);
  // useEffect(() => {
  //   if (mql.matches) {
  //     setSideBarOpen(true);
  //   } else {
  //     setSideBarOpen(false);
  //   }
  // }, [mql.matches]);

  function responsiveSidebar() {
    useEffect(() => {
      if (mql.matches) {
        setSideBarOpen(true);
      } else {
        setSideBarOpen(false);
      }
    }, []);
  }

  console.log(mql.matches);

  return (
    <App>
      <AppWrapper flexDirection="column">
        <header>
          <button type="button">Menu</button>
        </header>
        <Menu
          isOpen={sidebarOpen}
          noOverlay
          disableCloseOnEsc
          disableOverlayClick
        >
          <Header />
        </Menu>
        <MainContent>{children}</MainContent>
        {showFooter(disableFooter)}
      </AppWrapper>
    </App>
  );
};

Layout.propTypes = {
  disableFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
