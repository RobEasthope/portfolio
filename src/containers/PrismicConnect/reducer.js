import { fromJS } from 'immutable';

import {
  PRISMIC_API_CONNECTION_REQUEST,
  PRISMIC_API_CONNECTION_CONNECTED,
  PRISMIC_API_CONNECTION_ERROR,
} from './constants';

const initialState = fromJS({
  prismicApi: null,
  prismicApiLoading: null,
  prismicApiLoaded: null,
  prismicApiError: null,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRISMIC_API_CONNECTION_REQUEST:
      return state.set('prismicApiLoading', true).set('prismicApiError', null);
    case PRISMIC_API_CONNECTION_CONNECTED:
      return state
        .set('prismicApiDetails', action.payload)
        .set('prismicApiLoading', false)
        .set('prismicApiLoaded', true)
        .set('prismicApiError', null);
    case PRISMIC_API_CONNECTION_ERROR:
      return state
        .set('prismicApiLoading', false)
        .set('prismicApiLoaded', false)
        .set('prismicApiError', action.error);
    default:
      return state;
  }
};

export default appReducer;
