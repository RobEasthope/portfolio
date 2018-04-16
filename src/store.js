import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import appReducer from './containers/App/reducer';

export const history = createHistory();

export const middleware = routerMiddleware(history);

export const store = createStore(
  combineReducers({
    app: appReducer,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(middleware)),
);
