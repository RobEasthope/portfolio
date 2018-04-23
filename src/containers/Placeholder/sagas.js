import { takeLatest, call, put } from 'redux-saga/effects';
import fetchPrismicData from '../../utils/fetchPrismicData';

import { getPrismicDocLoaded, getPrismicDocError } from './actions';
import { GET_PLACEHOLDER_DOC } from './constants';

function* getPrismicDoc() {
  try {
    const response = yield call(fetchPrismicData);
    yield put(getPrismicDocLoaded(response));
  } catch (err) {
    yield put(getPrismicDocError(err));
  }
}

function* prismicData() {
  yield takeLatest(GET_PLACEHOLDER_DOC, getPrismicDoc);
}

export default prismicData;
