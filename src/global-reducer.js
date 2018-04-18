import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projectReducer from './containers/reducer';

const containersReducer = {
  containers: combineReducers({
    projectReducer,
    // NOTE: put other app reducers here
  }),
};

const createGlobalReducer = () =>
  combineReducers({
    ...containersReducer,
    route: routerReducer,
  });

export default createGlobalReducer;
