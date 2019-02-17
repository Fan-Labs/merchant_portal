const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  SIGN_UP: 'SIGN_UP',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  REQUEST_C20_MESSAGE: 'REQUEST_C20_MESSAGE',
  C20_VALIDATE: 'C20_VALIDATE',
  REQUEST_EMAIL_RESET: 'REQUEST_EMAIL_RESET',
  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER: 'UPDATE_USER',
  SUBMIT_RESET_PASSWORD: 'SUBMIT_RESET_PASSWORD',
  VERIFY_MAIL: 'VERIFY_MAIL',
  REQUEST_VERIFY_EMAIL: 'REQUEST_VERIFY_EMAIL',
  UPDATE_PHONE_NUMBER: 'UPDATE_PHONE_NUMBER',
  VERIFY_PHONE_NUMBER: 'VERIFY_PHONE_NUMBER',
  GET_OTP_SMS: 'GET_OTP_SMS',
  GET_OTP_CALL: 'GET_OTP_CALL',
  SET_OTP_STATE: 'SET_OTP_STATE',
  DISABLE_OTP: 'DISABLE_OTP',
  GET_2FA_QR: 'GET_2FA_QR',
  SET_2FA_CODE: 'SET_2FA_CODE',
  SUBMIT_OTP: 'SUBMIT_OTP',
  DISMISS_OTP: 'DISMISS_OTP',
  SUBMIT_KYC: 'SUBMIT_KYC',
  SET_KYC_TOKEN: 'SET_KYC_TOKEN',
  CHECK_KYC_STATUS: 'CHECK_KYC_STATUS',
  SET_KYC_STATUS: 'SET_KYC_STATUS',
  REFRESH_AUTH_TOKEN: 'REFRESH_AUTH_TOKEN',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  ID_VERIFY_SUCCESS: 'ID_VERIFY_SUCCESS',
  GET_BACKUP_OTP_SMS: 'GET_BACKUP_OTP_SMS',
  GET_BACKUP_OTP_CALL: 'GET_BACKUP_OTP_CALL',
  SET_NEW_USER: 'SET_NEW_USER',
  FETCH_AML_DOC_LIST: 'FETCH_KYC_DOC_LIST',
  DELETE_AML_DOC: 'DELETE_AML_DOC',
  SET_AML_DOC_LIST: 'SET_AML_DOC_LIST',
  CONFIRM_AML_DOCS_UPLOADED: 'CONFIRM_AML_DOCS_UPLOADED',
  UPLOAD_DOCUMENTS: 'UPLOAD_DOCUMENTS',
  REQUEST_JUMIO_TOKEN: 'REQUEST_JUMIO_TOKEN',
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  signup: (first_name, last_name, email, password) => ({
    type: actions.SIGN_UP,
    first_name,
    last_name,
    email,
    password
  }),
  login: (user, password, token) => ({
    type: actions.LOGIN_REQUEST,
    user,
    password,
    token
  }),
  logout: () => {
    
    return  {
      type: actions.LOGOUT
    }
  },
  requestC20Message: () => ({
    type: actions.REQUEST_C20_MESSAGE
  }),
  c20validate: (message, signature, address) => ({
    type: actions.C20_VALIDATE,
    message,
    signature,
    address
  }),
  startUpdateUser: (user) => ({
    type: actions.UPDATE_USER_REQUEST,
    user,
  }),
  updateUser: (updatedFields) => ({
    type: actions.UPDATE_USER,
    updatedFields,
  }),
  updatePassword: (oldPassword, newPassword) => ({
    type: actions.UPDATE_PASSWORD,
    oldPassword,
    newPassword,
  }),
  requestResetEmail: (email) => ({
    type: actions.REQUEST_EMAIL_RESET,
    email,
  }),
  submitResetPassword: (newPassword, token) => ({
    type: actions.SUBMIT_RESET_PASSWORD,
    newPassword,
    token,
  }),
  verifyMail: (token) => ({
    type: actions.VERIFY_MAIL,
    token,
  }),
  setNewNumber: (number) => ({
    type: actions.VERIFY_MAIL,
    number,
  }),
  getOTPSMS: (number) => ({
    type: actions.GET_OTP_SMS,
    number
  }),
  getOTPCall: (number) => ({
    type: actions.GET_OTP_CALL,
    number
  }),
  verifyNumber: (code, number) => ({
    type: actions.VERIFY_PHONE_NUMBER,
    code,
    number,
  }),
  get2FACode: () => ({
    type: actions.GET_2FA_QR,
  }),
  set2FACode: (uri) => ({
    type: actions.SET_2FA_CODE,
    uri,
  }),
  disable2FA: (password) => ({
    type: actions.DISABLE_OTP,
    password,
  }),
  submitOTP: (code, onSuccess, onFail) => ({
    type: actions.SUBMIT_OTP,
    code,
    onSuccess,
    onFail,
  }),
  requestBackupOTPSMS: (email, password) => ({
    type: actions.GET_BACKUP_OTP_SMS,
    email,
    password,
  }),
  requestBackupOTPCall: (email, password) => ({
    type: actions.GET_BACKUP_OTP_CALL,
    email,
    password,
  }),
  setOTPState: (state) => ({
    type: actions.SET_OTP_STATE,
    state,
  }),
  dismissOTP: () => ({
    type: actions.DISMISS_OTP,
  }),
  submitKYC: (values) => ({
    type: actions.SUBMIT_KYC,
    values,
  }),
  checkKYCstatus: () => ({
    type: actions.CHECK_KYC_STATUS,
  }),
  setKYCToken: (token) => ({
    type: actions.SET_KYC_TOKEN,
    token,
  }),
  setKYCStatus: (status) => ({
    type: actions.SET_KYC_STATUS,
    status,
  }),
  idVerifySuccess: (authorization_token) => ({
    type: actions.ID_VERIFY_SUCCESS,
    authorization_token,
  }),
  refreshToken: () => ({
    type: actions.REFRESH_AUTH_TOKEN,
  }),
  requestEmailVerification: () => ({
    type: actions.REQUEST_VERIFY_EMAIL,
  }),
  setNewUser: (isNew) => ({
    type: actions.SET_NEW_USER,
    isNew,
  }),
  fetchAMLDocList: (documentType) => ({
    type: actions.FETCH_AML_DOC_LIST,
    documentType,
  }),
  deleteAMLDoc: (id) => ({
    type: actions.DELETE_AML_DOC,
    id,
  }),
  setAMLDocList: (docs) => ({
    type: actions.SET_AML_DOC_LIST,
    docs,
  }),
  uploadDocuments: (documents, documentType) => ({
    type: actions.UPLOAD_DOCUMENTS,
    documentType,
    documents
  }),
  getJumioToken: () => ({
    type: actions.REQUEST_JUMIO_TOKEN,
  })
};
export default actions;
