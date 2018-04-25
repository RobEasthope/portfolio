import { fork, all } from 'redux-saga/effects';

import apiSagas from './containers/PrismicConnect/sagas';

const sagas = [
  apiSagas,
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
