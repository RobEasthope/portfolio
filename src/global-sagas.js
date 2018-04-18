import { fork, all } from 'redux-saga/effects';

import projectSagas from './containers/Project/sagas';

const sagas = [
  projectSagas,
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
