import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import Nav from './components/navigation/Nav';

import HomePage from './components/pages/HomePage';
import PortfolioPage from './components/pages/PortfolioPage';
import Placeholder from './containers/Placeholder/Placeholder';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Error404Page from './components/pages/Error404Page';

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
  <Router onUpdate={fireTracking}>
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
  </Router>
);

export default App;
