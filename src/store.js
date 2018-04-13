import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export const history = createHistory();

export const middleware = routerMiddleware(history);

export const store = createStore(
  combineReducers({
    // ...reducers,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(middleware)),
);
