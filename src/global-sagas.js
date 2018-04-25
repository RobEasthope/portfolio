import { fork, all } from 'redux-saga/effects';

import apiSagas from './containers/PrismicConnect/sagas';
import placeholderSagas from './containers/Placeholder/sagas';

const sagas = [
  apiSagas,
  placeholderSagas,
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
