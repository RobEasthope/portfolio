import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

// Styling
import 'sanitize.css/sanitize.css';
import './styles/global-styles';

import buildContext from './utils/prismicContext';

import Header from './components/Header/Header';

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      prismicCtx: null,
    };
  }

  componentWillMount() {
    buildContext()
      .then((prismicCtx) => {
        this.setState({ prismicCtx });
      })
      .catch((e) => {
        console.error(`Cannot contact the API, check your prismic configuration:\n${e}`);
      });
  }

  render() {
    return (
      <Router onUpdate={fireTracking} prismicCtx={this.state.prismicCtx}>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route
              path="/placeholder"
              render={() => <Placeholder prismicCtx={this.state.prismicCtx} />}
            />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={Error404Page} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
