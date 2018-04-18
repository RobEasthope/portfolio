import { takeLatest, call, put } from 'redux-saga/effects';

import { getPrismicDocLoaded, getPrismicDocError } from './actions';

import { GET_PRISMIC_DOC } from './constants';

/*
  Data downloading using pure JS fetch
  @type: JS object
  { result: resultObj, error: errorObj }
*/
const fetchData = (url, options) => {
  const fetchRequest = new Request(url, options);

  return fetch(fetchRequest)
    .then(response => response.json().then(result => ({ result })))
    .catch(error => ({ error }));
};

function* getApiData() {
  const { result, error } = yield call(fetchData, '/get', { method: 'get' });

  if (error) {
    yield put(getPrismicDocError(error));
  }

  yield put(getPrismicDocLoaded(result));
}

function* apiData() {
  yield takeLatest(GET_PRISMIC_DOC, getApiData);
}

export default apiData;
