import { all } from 'redux-saga/effects'
import authSagas from './auth/saga'
import messageSagas from './messages/saga'
import businessSagas from './businesses/saga'
import teamsSagas from './teams/saga'
import fixturesSagas from './fixtures/saga'
import offersSagas from './offers/saga'
import appSagas from './app/saga'

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    messageSagas(),
    businessSagas(),
    teamsSagas(),
    fixturesSagas(),
    offersSagas(),
    appSagas()
  ]);
}
