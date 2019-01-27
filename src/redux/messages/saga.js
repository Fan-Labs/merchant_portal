import { all, takeEvery, put, fork } from 'redux-saga/effects'
import messageActions from './actions'

export function* clearMessages() {
  yield takeEvery("@@router/LOCATION_CHANGE", function*() {
    yield put(messageActions.clearAll())
  });
}

export default function* rootSaga() {
  yield all([
    fork(clearMessages),
  ]);
}