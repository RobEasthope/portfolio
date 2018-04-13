import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
// import App from './containers/App';

import HomePage from 'components/pages/HomePage';
import PortfolioPage from 'components/pages/PortfolioPage';
import AboutPage from 'components/pages/AboutPage';
import ContactPage from 'components/pages/ContactPage';
import Error404Page from 'components/pages/Error404Page';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    // ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={Error404Page} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
