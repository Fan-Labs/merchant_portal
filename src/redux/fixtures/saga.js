import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { MESSAGE_KEYS } from '../../constants'
import { handleError } from '../auth/saga'
import appActions from '../app/actions'
import actions from './actions'
import {
  fetchFixtures,
  fetchBusinessFixtures
} from '../../helpers/api'
import { notification } from 'antd'


const { fetch_business_error } = MESSAGE_KEYS
export function* fetchFixturesWatcher() {
  yield takeEvery(actions.FETCH_FIXTURES, function*() {

        try {
        yield put(appActions.startAsync())
        const req = yield call(fetchFixtures)
        
        yield put(actions.setFixtures(req.data.data))
        yield put(appActions.endAsync())
        
      } catch(error) {
        yield handleError(error, fetch_business_error)
      }

  });
}

export function* fetchBusinessFixturesWatcher() {
  yield takeEvery(actions.FETCH_BUSINESS_FIXTURES, function*({businessId}) {
        try {
        yield put(appActions.startAsync())
        const req = yield call(fetchBusinessFixtures, businessId)
        
        yield put(actions.setBusinessFixtures(req.data.data))
        yield put(appActions.endAsync())
        
      } catch(error) {
        yield handleError(error, fetch_business_error)
      }

  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchFixturesWatcher),
    fork(fetchBusinessFixturesWatcher)
  ]);
}