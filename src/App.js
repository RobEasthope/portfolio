import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import ReactGA from 'react-ga';

import Nav from './components/navigation/Nav';

import HomePage from './components/pages/HomePage';
import PortfolioPage from './components/pages/PortfolioPage';
import Placeholder from './containers/Placeholder/Placeholder';
import PrismicConnect from './containers/PrismicConnect/PrismicConnect';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Error404Page from './components/pages/Error404Page';

import { store, history } from './store';

// Google Analytics
const snap = navigator.userAgent !== 'ReactSnap';
const production = process.env.NODE_ENV === 'production';
if (production && snap) {
  ReactGA.initialize('XX-XXXXXXXX-X');
}

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

const App = () => (
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <PrismicConnect>
      <ConnectedRouter onUpdate={fireTracking} history={history}>
        <div>
          <Nav />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/portfolio" component={PortfolioPage} />
            {/* <Route path="/project/:uid" component={Project} /> */}
            <Route path="/placeholder" component={Placeholder} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={Error404Page} />
          </Switch>
        </div>
      </ConnectedRouter>
    </PrismicConnect>
  </Provider>
);

export default App;
