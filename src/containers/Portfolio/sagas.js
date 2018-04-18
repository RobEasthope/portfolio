import { takeLatest, call, put } from 'redux-saga/effects';

import Prismic from 'prismic-javascript';
import { getPrismicDocLoaded, getPrismicDocError } from './actions';

import { GET_PRISMIC_DOC } from './constants';

const fetchData = () => {
  const prismicCall = Prismic.api('http://codex.prismic.io/api', (error, api) => {
    const options = {};
    api.query('', options, (err, response) => {
      // An empty query will return all the documents
      if (err) {
        return err;
      }
      return response.documents;
    });
  });

  return prismicCall;
};

function* getPrismicDoc() {
  try {
    const response = yield call(fetchData);
    yield put(getPrismicDocLoaded(response));
  } catch (err) {
    yield put(getPrismicDocError(err));
  }
}

function* prismicData() {
  yield takeLatest(GET_PRISMIC_DOC, getPrismicDoc);
}

export default prismicData;
