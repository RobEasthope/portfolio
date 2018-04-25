import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import apiReducer from './containers/PrismicConnect/reducer';
import placeholderReducer from './containers/Placeholder/reducer';

const prismicReducer = {
  prismic: combineReducers({
    config: apiReducer,
    docs: placeholderReducer,
  }),
};

const createGlobalReducer = () =>
  combineReducers({
    ...prismicReducer,
    route: routerReducer,
  });

export default createGlobalReducer;
