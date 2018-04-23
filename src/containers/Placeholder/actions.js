import {
  GET_PLACEHOLDER_DOC,
  GET_PLACEHOLDER_DOC_LOADED,
  GET_PLACEHOLDER_DOC_ERROR,
} from './constants';

export const getPrismicDoc = () => ({
  type: GET_PLACEHOLDER_DOC,
});

export const getPrismicDocLoaded = payload => ({
  type: GET_PLACEHOLDER_DOC_LOADED,
  payload,
});

export const getPrismicDocError = error => ({
  type: GET_PLACEHOLDER_DOC_ERROR,
  error,
});
