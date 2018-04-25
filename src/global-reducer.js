import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import apiReducer from './containers/PrismicConnect/reducer';

const prismicReducer = {
  prismic: combineReducers({
    config: apiReducer,
  }),
};

const createGlobalReducer = () =>
  combineReducers({
    ...prismicReducer,
    route: routerReducer,
  });

export default createGlobalReducer;
