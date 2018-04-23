import { fromJS } from 'immutable';

import {
  GET_PLACEHOLDER_DOC,
  GET_PLACEHOLDER_DOC_LOADED,
  GET_PLACEHOLDER_DOC_ERROR,
} from './constants';

const initialState = fromJS({
  prismicDoc: null,
  prismicDocLoading: null,
  prismicDocLoaded: null,
  prismicDocError: null,
});

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACEHOLDER_DOC:
      return state.set('prismicDocLoading', true).set('prismicDocError', null);
    case GET_PLACEHOLDER_DOC_LOADED:
      return state
        .set('prismicDoc', action.payload)
        .set('prismicDocLoading', false)
        .set('prismicDocLoaded', true)
        .set('prismicDocError', null);
    case GET_PLACEHOLDER_DOC_ERROR:
      return state
        .set('prismicDocLoading', false)
        .set('prismicDocLoaded', false)
        .set('prismicDocError', action.error);
    default:
      return state;
  }
};

export default projectReducer;
