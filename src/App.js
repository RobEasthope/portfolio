import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import 'whatwg-fetch';

import Nav from './components/navigation/Nav';

import HomePage from './components/pages/HomePage';
import PortfolioPage from './components/pages/PortfolioPage';
import Project from './containers/Project';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Error404Page from './components/pages/Error404Page';

import { store, history } from './store';
import { buildContext } from './utils/prismic-init';

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
      <Provider store={store} prismicCtx={this.state.prismicCtx}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
          <div>
            <Nav />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route
                exact
                path="/project/:uid"
                render={routeProps => (
                  <Project {...routeProps} prismicCtx={this.state.prismicCtx} />
                )}
              />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route component={Error404Page} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
