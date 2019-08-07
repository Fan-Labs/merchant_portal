import { all, takeEvery, put, fork, select } from 'redux-saga/effects'
// import { pageView } from '../../helpers/utility'
import { MESSAGE_KEYS } from '../../constants'
import { handleError } from '../auth/saga'
import actions from './actions'
import authActions from '../auth/actions'

const fakeApiCall = false // auth0 or express JWT

export const getLastAPICall = (state) => {
  return state.App.get('lastAPICall')
}

const { submit_otp_error } = MESSAGE_KEYS
export function* repeatOTPRequestWatcher() {
  yield takeEvery(actions.REPEAT_WITH_OTP, function*({ code }) {
    if (fakeApiCall) {

    } else {
        try {
          const action  = yield select(getLastAPICall)
          yield put({
            ...action,
            code,
          })
          yield put(authActions.dismissOTP())
        } catch(error) {
          yield handleError(error, submit_otp_error)
        }
    }
  });
}

export function* logPageView() {
  yield takeEvery("@@router/LOCATION_CHANGE", function*() {
    // yield pageView()
  });
}

export default function* rootSaga() {
  yield all([
    fork(repeatOTPRequestWatcher),
    fork(logPageView),
  ]);
}