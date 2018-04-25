import {
  PRISMIC_API_CONNECTION_REQUEST,
  PRISMIC_API_CONNECTION_CONNECTED,
  PRISMIC_API_CONNECTION_ERROR,
} from './constants';

export const prismicApiConnectionRequest = () => ({
  type: PRISMIC_API_CONNECTION_REQUEST,
});

export const prismicApiConnectionLoaded = payload => ({
  type: PRISMIC_API_CONNECTION_CONNECTED,
  payload,
});

export const prismicApiConnectionError = error => ({
  type: PRISMIC_API_CONNECTION_ERROR,
  error,
});
