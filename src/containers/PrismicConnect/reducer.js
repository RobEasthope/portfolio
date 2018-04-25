import { fromJS } from 'immutable';

import {
  PRISMIC_API_CONNECTION_REQUEST,
  PRISMIC_API_CONNECTION_CONNECTED,
  PRISMIC_API_CONNECTION_ERROR,
} from './constants';

const initialState = fromJS({
  prismicDoc: null,
  prismicDocLoading: null,
  prismicDocLoaded: null,
  prismicDocError: null,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRISMIC_API_CONNECTION_REQUEST:
      return state.set('prismicDocLoading', true).set('prismicDocError', null);
    case PRISMIC_API_CONNECTION_CONNECTED:
      return state
        .set('prismicDoc', action.payload)
        .set('prismicDocLoading', false)
        .set('prismicDocLoaded', true)
        .set('prismicDocError', null);
    case PRISMIC_API_CONNECTION_ERROR:
      return state
        .set('prismicDocLoading', false)
        .set('prismicDocLoaded', false)
        .set('prismicDocError', action.error);
    default:
      return state;
  }
};

export default appReducer;
