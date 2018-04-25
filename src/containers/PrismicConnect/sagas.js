import { takeLatest, call, put } from 'redux-saga/effects';
// import fetchPrismicApiDetails from '../../utils/fetchPrismicApiDetails';
import buildContext from '../../utils/buildContext';

import { prismicApiConnectionLoaded, prismicApiConnectionError } from './actions';
import { PRISMIC_API_CONNECTION_REQUEST } from './constants';

function* connectToPrismicAPI() {
  try {
    const response = yield call(buildContext);
    yield put(prismicApiConnectionLoaded(response));
  } catch (err) {
    yield put(prismicApiConnectionError(err));
  }
}

function* prismicApiDetails() {
  yield takeLatest(PRISMIC_API_CONNECTION_REQUEST, connectToPrismicAPI);
}

export default prismicApiDetails;
