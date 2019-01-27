import { Map } from 'immutable'
import actions from './actions'

const initState = new Map({
  user: {
    id: 1,
    first_name: null,
    last_name: null,
    group: null,
    language: null,
    email: null,
    email_verified: null,
    phone: null,
    created_at: null,
    updated_at: null,
    two_factor: false,
    eth_address: null,
    verification:{}
  },
  provisioning_uri: null,
  show_otp_modal: false,
  otp_request: null,
  otp_request_payload: null,
  kyc_auth_token: null,
  new_user: false,
  aml_docs: [],
});

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      break;
      //return state.set('idToken', action.token)
      //return state.set('user', jwt_decode(action.token).user)
    case actions.LOGOUT:
      return initState;
    case actions.UPDATE_USER:
      //const user = state.get('user')
      let user = state.get('user')
      user = {
        ...user,
        ...action.updatedFields
      }
      return state.set('user', user)
    // case actions.SET_OTP:
    //   return state.set('OTP', action.OTP)
    case actions.SET_2FA_CODE:
      return state.set('provisioning_uri', action.uri)
    case actions.SET_OTP_STATE:
      return state.set('show_otp_modal', action.state)
    case actions.DISMISS_OTP:
      return state.set('show_otp_modal', false)
        .set('otp_request', null)
        .set('otp_request_payload', null)
    case actions.DISABLE_OTP:
      return state.set('provisioning_uri', null)
    case actions.SET_KYC_TOKEN:
      return state.set('kyc_auth_token', action.token)
    case actions.SET_KYC_STATUS:
      return state.set('kyc_status', action.status)
    case actions.SET_NEW_USER:
      return state.set('new_user', action.isNew)
    case actions.SET_AML_DOC_LIST:
      let existing_docs = state.get('aml_docs')
      action.docs.forEach(doc => {
        const index = existing_docs.findIndex(d => d.url === doc.url)
        if (index===-1) existing_docs.push({...doc, name: doc.url, uid: existing_docs.length+1}) 
      })
      return state.set('aml_docs', existing_docs)
    default:
      return state;
  }
}