import { GET_PRISMIC_DOC, GET_PRISMIC_DOC_LOADED, GET_PRISMIC_DOC_ERROR } from './constants';

export const getPrismicDoc = () => ({
  type: GET_PRISMIC_DOC,
});

export const getPrismicDocLoaded = payload => ({
  type: GET_PRISMIC_DOC_LOADED,
  payload,
});

export const getPrismicDocError = error => ({
  type: GET_PRISMIC_DOC_ERROR,
  error,
});
