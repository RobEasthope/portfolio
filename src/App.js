import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';

// Styling
import 'sanitize.css/sanitize.css';
import './styles/global-styles';
import theme from './styles/theme';

import buildContext from './utils/prismicContext';

import Header from './components/Header/Header';

import Home from './containers/Home/Home';
import Portfolio from './containers/Portfolio/Portfolio';
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
      <ThemeProvider theme={theme}>
        <Router onUpdate={fireTracking} prismicCtx={this.state.prismicCtx}>
          <div>
            <Header />

            <Switch>
              <Route
                exact
                path="/"
                render={routeProps => <Home {...routeProps} prismicCtx={this.state.prismicCtx} />}
              />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route component={Error404Page} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
