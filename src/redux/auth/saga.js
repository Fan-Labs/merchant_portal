import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { clearToken, getUser } from '../../helpers/utility'
import { MESSAGE_KEYS } from '../../constants'
import actions from './actions'
import appActions from '../app/actions'
import investActions from '../invest/actions'
import messageActions from '../messages/actions'
import { captureEvent } from '../../helpers/utility'
import { signupFomoEvent } from '../../helpers/utility';
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
    if (fakeApiCall) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: 'secret token',
        profile: 'Profile'
      });

      yield put(push('/app'))

    } else {
        try {
          yield put(appActions.startAsync())
          yield put(appActions.setLastAPIAction(action))
          yield call(login, user, password, token, code)
          yield put(actions.updateUser(getUser()))
          // const status = yield call(checkKYCStatus)
          // yield put(actions.setKYCStatus(status.data.verification))
          yield put(push('/app'))
        } catch(error) {
          yield handleError(error, login_error)
        }
    }
  });
}

export function* loginSuccess() {
  // yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {

  //   yield localStorage.setItem('id_token', payload.token);
  //   yield put()
  //   yield put(push('/app'))

  // });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    debugger
    clearToken();
    yield put(push('/'));
  });
}

const { signup_errors } = MESSAGE_KEYS
export function* signupRequest() {
  yield takeEvery(actions.SIGN_UP, function*(action) {
    const { first_name, last_name, email, password } = action
    yield put(appActions.setLastAPIAction(action))
    if (fakeApiCall) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: 'secret token',
        profile: 'Profile'
      });

      yield put(push('/app'))

    } else {
      try {
        yield call(signup, email, password)
        //signupFomoEvent(first_name)
        yield put(actions.setNewUser(true))
        yield put(push('/app'))
      } catch(error) {
        yield handleError(error, signup_errors)
      }
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
    yield put(appActions.setLastAPIAction(action))
    if (fakeApiCall) {

      yield put(push('/'))

    } else {

      try {
        yield put(appActions.startAsync())
        yield call(resetPassword, newPassword, token, code)
        yield put(push('/app'))
        yield put(appActions.endAsync())
      } catch(error) {
        yield handleError(error, password_reset_error)
      }
    }
  });
}

const { email_verify_success, email_verify_error } = MESSAGE_KEYS
export function* verifyMailWatcher() {
  yield takeEvery(actions.VERIFY_MAIL, function*(action) {
    const { token, code="" } = action
    yield put(appActions.setLastAPIAction(action))
    if (fakeApiCall) {
      yield put(push('/'))
    } else {
      try {
        yield put(appActions.startAsync())
        yield call(verifyMail, token, code)
        yield put(messageActions.setMessage(email_verify_success, email_verify_success))
        yield put(appActions.endAsync())
      } catch(error) {
          yield handleError(error, email_verify_error)
      }
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

export function* getOTPCallWatcher() {
  yield takeEvery(actions.GET_OTP_CALL, function*({number}) {
    if (fakeApiCall) {


    } else {
      try {
        yield put(appActions.startAsync())
        //yield call(getOTPCall, number)
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

const { get_qr_fail } = MESSAGE_KEYS
export function* getQRWatcher() {
  yield takeEvery(actions.GET_2FA_QR, function*() {
    if (fakeApiCall) {


    } else {
      try {
        yield put(appActions.startAsync())
        const req = yield call(get2FACode)
        yield put(actions.set2FACode(req.data.provisioning_uri))
        yield put(appActions.endAsync())
      } catch(error) {
         yield handleError(error, get_qr_fail)
      }
    }
  });
}

const { submit_otp_error } = MESSAGE_KEYS
export function* submitOTPWatcher() {
  yield takeEvery(actions.SUBMIT_OTP, function*({ code, onSuccess, onFail }) {
    if (fakeApiCall) {


    }
    else {
      try {
        yield put(appActions.startAsync())
        yield call(submitOTP, code)
        const user = getUser();
        if (user) {
          user.two_factor = true;
          yield put(actions.updateUser(user))
        }
        yield call(onSuccess)
        yield put(appActions.endAsync())
      }
      catch(error) {
        yield handleError(error, submit_otp_error)
        yield call(onFail)
      }
    }
  });
}

const { disable_2fa_error } = MESSAGE_KEYS
export function* disable2FAWatcher() {
  yield takeEvery(actions.DISABLE_OTP, function*({ password }) {
    if (fakeApiCall) {


    }
    else {
      try {
        yield put(appActions.startAsync())
        yield call(disable2FA, password)
        const user = getUser();
        if (user) {
          yield put(actions.updateUser(user))
        }
        yield put(appActions.endAsync())
      }
      catch(error) {
        yield handleError(error, disable_2fa_error)
      }
    }
  });
}


const { check_kyc_error } = MESSAGE_KEYS
export function* checkKYCWatcher() {
  yield takeEvery(actions.CHECK_KYC_STATUS, function*({ values }) {
    if (fakeApiCall) {


    }
    else {
      try {
        yield put(appActions.startAsync())

    
        const user = getUser();
        if (user) {
          yield put(actions.updateUser(user))
        }
        yield put(appActions.endAsync())
      }
      catch(error) {
        yield handleError(error, check_kyc_error)
      }
    }
  });
}

export function* fetchAMLDocWatcher() {
  yield takeEvery(actions.FETCH_AML_DOC_LIST, function*({documentType}) {
    if (fakeApiCall) {


    }
    else {
      try {
        yield put(appActions.startAsync())
        // const req = yield call(fetchAMLDocList, documentType)
        // yield put(actions.setAMLDocList(req.data.documents))
        yield put(appActions.endAsync())
      }
      catch(error) {
        yield handleError(error, check_kyc_error)
      }
    }
  });
}

export function* uploadAMLDocWatcher() {
  yield takeEvery(actions.UPLOAD_DOCUMENTS, function*({documents, documentType}) {
    if (fakeApiCall) {


    }
    else {
      try {
        yield put(appActions.startAsync())

        debugger
        for(var i=0 ; i<documents.length ; i++){
          debugger
          yield call(uploadDocument, documents[i], documentType)
        }

        yield put(actions.fetchAMLDocList(documentType))
        yield put(appActions.endAsync())
      }
      catch(error) {
        yield handleError(error, check_kyc_error)
      }
    }
  });
}

export function* requestJumioTokenWatcher() {
  yield takeEvery(actions.REQUEST_JUMIO_TOKEN, function*() {
    
    
  });
}

const { refresh_token_error } = MESSAGE_KEYS
export function* refreshTokenWatcher() {
  yield takeEvery(actions.REFRESH_AUTH_TOKEN, function*() {
    if (fakeApiCall) {


    }
    else {
      try {
        yield put(appActions.startAsync())
        yield put(actions.refreshTokenAndUser())
        const user = getUser();
        if (user) {
          yield put(actions.updateUser(user))
        }
        yield put(appActions.endAsync())
      }
      catch(error) {
        yield handleError(error, refresh_token_error)
      }
    }
  });
}

const { id_verify_error } = MESSAGE_KEYS
export function* idVerifySuccessWatcher() {
  yield takeEvery(actions.ID_VERIFY_SUCCESS, function*({ authorization_token }) {
    
  });
}

const { backup_otp_error, backup_otp_success } = MESSAGE_KEYS
export function* backupOTPSMSWatcher() {
  yield takeEvery(actions.GET_BACKUP_OTP_SMS, function*({ email, password }) {
    // if (fakeApiCall) {


    // }
    // else {
    //   try {
    //     yield put(appActions.startAsync())
    //     yield call(getBackupOTPSMS, email, password)
    //     const user = getUser();
    //     if (user) {
    //       yield put(actions.updateUser(user))
    //     }
    //     yield put(messageActions.setMessage(backup_otp_success, backup_otp_success))
    //     yield put(appActions.endAsync())
    //   }
    //   catch(error) {
    //     yield handleError(error, backup_otp_error)
    //   }
    // }
  });
}

export function* backupOTPCallWatcher() {
  yield takeEvery(actions.GET_BACKUP_OTP_CALL, function*({ email, password }) {
    // if (fakeApiCall) {


    // }
    // else {
    //   try {
    //     yield put(appActions.startAsync())
    //     yield call(getBackupOTPCall, email, password)
    //     const user = getUser();
    //     if (user) {
    //       yield put(actions.updateUser(user))
    //     }
    //     yield put(messageActions.setMessage(backup_otp_success, backup_otp_success))
    //     yield put(appActions.endAsync())
    //   }
    //   catch(error) {
    //     yield handleError(error, backup_otp_error)
    //   }
    // }
  });
}

//HANDLE ERROR TRIGGERS OTP MODAL IF SERVER REQUIRES IT

export function* handleError(error, errorMessageKey, shouldTranslate=false) {
  if(!error.response) {
    yield put(messageActions.setMessage(errorMessageKey, error.message))
  }
  else if(error.response.data.code === 'TWO_FA_REQUIRED') {
    yield put(actions.setOTPState(true))
  }
  else if(error.response && error.response.data && error.response.data.errors) {
    yield put(messageActions.setMessage(errorMessageKey, error.response.data.errors.toString()))
  } else if (shouldTranslate) {
    yield put(messageActions.setMessage(errorMessageKey, errorMessageKey))
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
    yield call(refreshTokenAndUser)
  });
}

export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
    fork(passwordReset),
    fork(requestEmailReset),
    fork(requestEmailVerifyWatcher),
    fork(signupRequest),
    fork(verifyMailWatcher),
    fork(updateUserWatcher),
    fork(getOTPSMSWatcher),
    fork(getOTPCallWatcher),
    fork(verifyPhoneWatcher),
    fork(getQRWatcher),
    fork(submitOTPWatcher),
    fork(disable2FAWatcher),
    fork(refreshTokenWatcher),
    fork(updatePasswordWatcher),
    fork(backupOTPSMSWatcher),
    fork(backupOTPCallWatcher),
    fork(refreshToken)
  ]);
}
