import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import apiReducer from './containers/PrismicConnect/reducer';

const containersReducer = {
  containers: combineReducers({
    apiReducer,
    // NOTE: put other app reducers here
  }),
};

const createGlobalReducer = () =>
  combineReducers({
    ...containersReducer,
    route: routerReducer,
  });

export default createGlobalReducer;
