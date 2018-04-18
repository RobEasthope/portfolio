import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import createGlobalReducer from './global-reducer';
import globalSagas from './global-sagas';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  routerMiddleware(history),
  sagaMiddleware,
];

export const store = createStore(
  createGlobalReducer(),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(globalSagas);

export default store;
