import { all } from 'redux-saga/effects'
import authSagas from './auth/saga'
import messageSagas from './messages/saga'
import appSagas from './app/saga'
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    messageSagas(),
    appSagas()
  ]);
}
