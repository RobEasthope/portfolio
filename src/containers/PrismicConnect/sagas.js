import { takeLatest, call, put } from 'redux-saga/effects';
import fetchPrismicData from '../../utils/fetchPrismicData';

import { prismicApiConnectionLoaded, prismicApiConnectionError } from './actions';
import { PRISMIC_API_CONNECTION_REQUEST } from './constants';

function* connectToPrismicAPI() {
  try {
    const response = yield call(fetchPrismicData);
    yield put(prismicApiConnectionLoaded(response));
  } catch (err) {
    yield put(prismicApiConnectionError(err));
  }
}

function* prismicApiDetails() {
  yield takeLatest(PRISMIC_API_CONNECTION_REQUEST, connectToPrismicAPI);
}

export default prismicApiDetails;
