import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import Prismic from 'prismic-javascript';

import PrismicConfig from './prismic-configuration';

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      prismicCtx: null,
    };
  }

  componentWillMount() {
    this.buildContext()
      .then((prismicCtx) => {
        this.setState({ prismicCtx });
      })
      .catch((e) => {
        console.error(`Cannot contact the API, check your prismic configuration:\n${e}`);
      });
  }

  refreshToolbar() {
    const maybeCurrentExperiment = this.api.currentExperiment();
    if (maybeCurrentExperiment) {
      window.PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
    }
    window.PrismicToolbar.setup(PrismicConfig.apiEndpoint);
  }

  buildContext() {
    const { accessToken } = PrismicConfig;
    return Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
      api,
      endpoint: PrismicConfig.apiEndpoint,
      accessToken,
      linkResolver: PrismicConfig.linkResolver,
      toolbar: this.refreshToolbar,
    }));
  }

  render() {
    return (
      <Router onUpdate={fireTracking} prismicCtx={this.state.prismicCtx}>
        <div>
          <Nav />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/portfolio" component={PortfolioPage} />
            {/* <Route path="/project/:uid" component={Project} /> */}
            {/* <Route path="/placeholder" component={Placeholder} /> */}
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
