import { takeLatest, call, put } from 'redux-saga/effects';
import fetchPrismicDoc from '../../utils/fetchPrismicDoc';

import { getPrismicDocLoaded, getPrismicDocError } from './actions';
import { GET_PRISMIC_DOC } from './constants';

function* getPrismicDoc() {
  try {
    const response = yield call(fetchPrismicDoc);
    yield put(getPrismicDocLoaded(response));
  } catch (err) {
    yield put(getPrismicDocError(err));
  }
}

function* prismicData() {
  yield takeLatest(GET_PRISMIC_DOC, getPrismicDoc);
}

export default prismicData;
