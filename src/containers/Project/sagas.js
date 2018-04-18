import { takeLatest, call, put } from 'redux-saga/effects';
import fetchPrismicData from '../../utils/fetchPrismicData';

import { getPrismicDocLoaded, getPrismicDocError } from './actions';
import { GET_PRISMIC_DOC } from './constants';

function* getPrismicDoc() {
  try {
    const response = yield call(fetchPrismicData);
    yield put(getPrismicDocLoaded(response));
  } catch (err) {
    yield put(getPrismicDocError(err));
  }
}

function* prismicData() {
  yield takeLatest(GET_PRISMIC_DOC, getPrismicDoc);
}

export default prismicData;
