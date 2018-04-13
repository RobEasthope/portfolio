import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Nav from 'components/navigation/Nav';

import HomePage from 'components/pages/HomePage';
import PortfolioPage from 'components/pages/PortfolioPage';
import AboutPage from 'components/pages/AboutPage';
import ContactPage from 'components/pages/ContactPage';
import Error404Page from 'components/pages/Error404Page';

import { store, history } from '../store';

const App = () => (
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={Error404Page} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
