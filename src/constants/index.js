import bitcoin_logo from '../image/currencies/bitcoin_logo.png'
import ethereum_logo from '../image/currencies/ethereum_logo.png'

export const priority_deadlines = {
  hyperion: '2018-04-30T13:00:00+00:00',
}

export const hyperion_open_ico = '2018-05-04T08:00:00+00:00'

export const ihf_withdrawals_open = '2018-05-14T09:00:00+00:00'

export const ico_close_date = '2018-05-31T00:00:00+00:00'

export const fund_timelines = {
  gamedex: [
    {
      label: 'Priority ICO Begins',
      date: '2018-04-30T13:00:00+00:00',
    },
    {
      label: 'Open ICO Begins',
      date: '2018-05-04T09:00:00+00:00',
    },
    {
      label: 'End of ICO',
      date: '2018-05-30T18:00:00+00:00',
    }
  ]
}

export const SOURCE_OF_FUNDS = [
  {
    key: 'kyc.salary',
    value: 'Salary/bonus',
  },
  {
    key: 'kyc.saleOfProperty',
    value: 'Sale of property/company',
  },
  {
    key: 'kyc.saleOfInvestments',
    value: 'Sale of investments',
  },
  {
    key: 'kyc.dividends',
    value: 'Dividends',
  },
  {
    key: 'kyc.loan',
    value: 'Loan Proceeds',
  },
  {
    key: 'kyc.inheritance',
    value: 'Inheritance',
  },
  {
    key: 'kyc.compensation',
    value: 'Compensation payment',
  },
  {
    key: 'kyc.policyClaim',
    value: 'Policy claim/maturity',
  }
]

export const currencies = [
  {
    name: 'Bitcoin',
    imageUrl: bitcoin_logo,
  },
  {
    name: 'Ethereum',
    imageUrl: ethereum_logo,
  }
]

export const KYC_STATUSES = {
  NO_ATTEMPT: 'NO_ATTEMPT',
  AML_PENDING: 'AML_PENDING',
  ID_PENDING: 'ID_PENDING',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DELAYED: 'DELAYED'
}

export const MESSAGE_KEYS = {
  request_reset_email: 'page.resetEmailSent',
  request_reset_email_error: 'page.resetEmailError',
  password_reset_error: 'page.resetPassError',
  password_reset_success: 'page.resetPassSuccess',
  c20_message_fail: 'user.c20MessageFail',
  c20_verify_fail: 'user.c20VerifyFail',
  login_error: 'page.signInError',
  signup_errors: 'signup_errors',
  signup_success: 'page.signupVerifySent',
  email_verify_error: 'page.mailVerifyError',
  email_verify_success: 'page.mailVerifySuccess',
  user_update_success: 'settings.updateUserSuccess',
  user_update_error: 'settings.updateUserError',
  get_otp_fail: 'settings.getOTPFail',
  otp_success: 'settings.otpSuccess',
  otp_fail: 'settings.otpFail',
  get_qr_fail: 'settings.getQRFail',
  submit_otp_error: 'settings.otpFail',
  disable_2fa_error: 'settings.disableError',
  submit_kyc_error: 'setting.submitKYCError',
  refresh_token_error: 'settings.refreshTokenError',
  fetch_subscription_error: 'settings.fetchSubscriptionError',
  update_subscription_error: 'settings.updateSubscriptionError',
  password_update_success: 'settings.passwordUpdateSuccess',
  password_update_error: 'settings.passwordUpdateError',
  id_verify_error: 'kyc.idVerifyError',
  backup_otp_success: 'settings.backupOtpSuccess',
  backup_otp_error: 'settings.backupOtpError',
  email_verify_request: 'settings.requestEmailMessage',
  get_balances_fails: 'history.getBalancesFail',
  get_transactions_fails: 'history.getTransactionsFail',
  get_withdrawals_fails: 'history.getWithdrawalsFail',
  get_address_fail: 'invest.getAddressFail',
  submit_claim_error: 'claim.submitClaimError',
  fetch_business_error: 'app.fetchBusinessError'
}