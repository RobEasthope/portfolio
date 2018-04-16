import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import projectsReducer from './containers/Project/reducer';

export const history = createHistory();

export const middleware = routerMiddleware(history);

export const store = createStore(
  combineReducers({
    projects: projectsReducer,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(middleware)),
);
