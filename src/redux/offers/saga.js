import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { MESSAGE_KEYS } from '../../constants'
import { handleError } from '../auth/saga'
import appActions from '../app/actions'
import actions from './actions'
import {
  fetchOffers,
} from '../../helpers/api'
import { notification } from 'antd'


const { fetch_business_error } = MESSAGE_KEYS
export function* fetchOffersWatcher() {
  yield takeEvery(actions.FETCH_OFFERS, function*() {

        try {
        yield put(appActions.startAsync())
        const req = yield call(fetchOffers)
        
        yield put(actions.setOffers(req.data.data))
        yield put(appActions.endAsync())
        
      } catch(error) {
        yield handleError(error, fetch_business_error)
      }

  });
}



export default function* rootSaga() {
  yield all([
    fork(fetchOffersWatcher),
  ]);
}