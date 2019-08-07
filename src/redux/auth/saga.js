import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { clearToken, getUser } from '../../helpers/utility'
import { MESSAGE_KEYS } from '../../constants'
import actions from './actions'
import appActions from '../app/actions'
import businessActions from '../businesses/actions'
import messageActions from '../messages/actions'
import {
  login,
  c20validate,
  resetPassword,
  requestResetEmail,
  requestEmailVerification,
  signup,
  verifyMail,
  updateUserProfile,
  updatePassword,
  getOTPSMS,
  verifyPhone,
  get2FACode,
  submitOTP,
  disable2FA,
  refreshTokenAndUser,
  uploadDocument,
  requestJumioToken,
} from '../../helpers/api'

const fakeApiCall = false; // auth0 or express JWT

const { login_error } = MESSAGE_KEYS
export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function*(action) {
    const { user, password, token, code="" } = action; 
      try {
        yield put(appActions.startAsync())
        //yield put(appActions.setLastAPIAction(action))
        yield call(login, user, password, token, code)
        
        yield put(actions.updateUser(getUser()))
        yield call(businessActions.fetchUserBusinesses)
        // yield put(actions.setKYCStatus(status.data.verification))
        yield put(appActions.endAsync())
        yield put(push('/app'))
      } catch(error) {
        yield handleError(error, login_error)
      }
  });
}


export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export function* logout() {
  console.log('running logout saga')
  yield takeEvery(actions.LOGOUT, function*(action) {
    
    clearToken();
    yield put(push('/'));
  });
}

const { signup_errors, signup_success } = MESSAGE_KEYS
export function* signupRequest() {
  yield takeEvery(actions.SIGN_UP, function*(action) {
    const { first_name, last_name, email, password } = action
    yield put(appActions.setLastAPIAction(action))
      try {
        yield call(signup, email, password)
        
        yield put(messageActions.setMessage(signup_success, signup_success))
        //signupFomoEvent(first_name)

      } catch(error) {
        yield handleError(error, signup_errors)
      }
  });
}

export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    const user = getUser();
    if (user) {
      yield put(actions.updateUser(user))
    }
  });
}


const { request_reset_email, request_reset_email_error } = MESSAGE_KEYS
export function* requestEmailReset() {
  yield takeEvery(actions.REQUEST_EMAIL_RESET, function*(action) {
    const { email, code="" } = action
    yield put(appActions.setLastAPIAction(action))
    if (fakeApiCall) {

      yield put(push('/'))

    } else {

      try {
        yield put(appActions.startAsync())
        yield call(requestResetEmail, email, code)
        yield put(messageActions.setMessage(request_reset_email, request_reset_email))
        yield put(appActions.endAsync())
      } catch(error) {
        yield handleError(error, request_reset_email_error)
      }
    }
  });
}


const { password_reset_error } = MESSAGE_KEYS
export function* passwordReset() {
  yield takeEvery(actions.SUBMIT_RESET_PASSWORD, function*(action) {
    const { newPassword, token, code="" } = action
      try {
        yield put(appActions.startAsync())
        
        yield call(resetPassword, newPassword, token, code)
        
        yield put(push('/app'))
        yield put(appActions.endAsync())
      } catch(error) {
        yield handleError(error, password_reset_error)
      }
  });
}

const { email_verify_success, email_verify_error } = MESSAGE_KEYS
export function* verifyMailWatcher() {
  yield takeEvery(actions.VERIFY_MAIL, function*(action) {
    const { token, code="" } = action
    //yield put(appActions.setLastAPIAction(action))
    try {
      yield put(appActions.startAsync())
      
      yield call(verifyMail, token, code)
      
      yield put(messageActions.setMessage(email_verify_success, email_verify_success))
      yield put(appActions.endAsync())
    } catch(error) {
        yield handleError(error, email_verify_error)
    }
  });
}

const { email_verify_request } = MESSAGE_KEYS
export function* requestEmailVerifyWatcher() {
  yield takeEvery(actions.REQUEST_VERIFY_EMAIL, function*(action) {
    yield put(appActions.setLastAPIAction(action))
    if (fakeApiCall) {

      yield put(push('/'))

    } else {

      try {
        yield put(appActions.startAsync())
        yield call(requestEmailVerification)
        const updatedUser = getUser();
        if (updatedUser) {
          yield put(actions.updateUser(updatedUser))
        }
        yield put(messageActions.setMessage(email_verify_request, email_verify_request))
        yield put(appActions.endAsync())
      } catch(error) {
        yield handleError(error, email_verify_request)
      }
    }
  });
}


const { user_update_success, user_update_error } = MESSAGE_KEYS
export function* updateUserWatcher() {
  yield takeEvery(actions.UPDATE_USER_REQUEST, function*(action) {
    const { user, code } = action
    yield put(appActions.setLastAPIAction(action))
    if (fakeApiCall) {

      yield put(push('/'))

    } else {

      try {
        yield put(appActions.startAsync())
        yield call(updateUserProfile, user, code)
        const updatedUser = getUser();
        if (updatedUser) {
          yield put(actions.updateUser(updatedUser))
        }
        yield put(messageActions.setMessage(user_update_success, user_update_success))
        yield put(appActions.endAsync())
      } catch(error) {
        yield handleError(error, user_update_error)
      }
    }
  });
}

const { password_update_success, password_update_error } = MESSAGE_KEYS
export function* updatePasswordWatcher() {
  yield takeEvery(actions.UPDATE_PASSWORD, function*(action) {
    const { oldPassword, newPassword, code } = action
    yield put(appActions.setLastAPIAction(action))
    try {
      yield put(appActions.startAsync())
      yield call(updatePassword, oldPassword, newPassword, code)
      const updatedUser = getUser();
      if (updatedUser) {
        yield put(actions.updateUser(updatedUser))
      }
      yield put(messageActions.setMessage(password_update_success, password_update_success))
      yield put(appActions.endAsync())
    } catch(error) {
      yield handleError(error, password_update_error)
    }
  });
}

const { get_otp_fail } = MESSAGE_KEYS
export function* getOTPSMSWatcher() {
  yield takeEvery(actions.GET_OTP_SMS, function*({number}) {
    if (fakeApiCall) {


    } else {
      try {
        yield put(appActions.startAsync())
        yield call(getOTPSMS, number)
        yield put(appActions.endAsync())
      } catch(error) {
          yield handleError(error, get_otp_fail)
      }
    }
  });
}


const { otp_success, otp_fail } = MESSAGE_KEYS
export function* verifyPhoneWatcher() {
  yield takeEvery(actions.VERIFY_PHONE_NUMBER, function*(action) {
    const {code, number} = action
    yield put(appActions.setLastAPIAction(action))
    if (fakeApiCall) {


    } else {
      try {
        yield put(appActions.startAsync())
        yield call(verifyPhone, code, number)
        yield put(messageActions.setMessage(otp_success, otp_success))
        const user = getUser();
        if (user) {
          yield put(actions.updateUser(user))
        }
        yield put(appActions.endAsync())
      } catch(error) {
        yield handleError(error, otp_fail)
      }
    }
  });
}



const { id_verify_error } = MESSAGE_KEYS
export function* idVerifySuccessWatcher() {
  yield takeEvery(actions.ID_VERIFY_SUCCESS, function*({ authorization_token }) {
    
  });
}


//HANDLE ERROR TRIGGERS OTP MODAL IF SERVER REQUIRES IT

export function* handleError(error, errorMessageKey, shouldTranslate=false) {
  if(!error.response) {
    yield put(messageActions.setMessage(errorMessageKey, "Verification error, please contact us if this persists."))
  }
  else if(error.response.data.message ) {
    yield put(messageActions.setMessage(errorMessageKey, error.response.data.message))
  }
  else if(error.response && error.response.data && error.response.data.errors) {
    yield put(messageActions.setMessage(errorMessageKey, error.response.data.errors.toString()))
  } 
  else if(error.response && error.response.data && error.response.data.message) {
    yield put(messageActions.setMessage(errorMessageKey, error.response.data.message))
  }
  else if (error.response.status===500) {
    yield put(messageActions.setMessage(errorMessageKey, "page500.description"))
  }
  yield put(appActions.endAsync())
}

export function* refreshToken() {
  yield takeEvery("@@router/LOCATION_CHANGE", function*() {
    console.log('route change')
    //yield call(refreshTokenAndUser)
  });
}

export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginError),
    fork(logout),
    fork(passwordReset),
    fork(requestEmailReset),
    fork(requestEmailVerifyWatcher),
    fork(signupRequest),
    fork(verifyMailWatcher),
    fork(updateUserWatcher),
    fork(verifyPhoneWatcher),
    fork(updatePasswordWatcher)
  ]);
}
