import React from 'react'
import { Redirect } from 'react-router'
import Address from '../../containers/KYC/Address'
import UserDetails from '../../containers/KYC/UserDetails'
import Jumio from '../../containers/KYC/Jumio'
import Uploader from '../../components/documentUploader/documentUploader'
import IntlMessages from '../../components/utility/intlMessages'

const steps = {
  ADDRESS: {
    title: <IntlMessages id="kyc.step1" />,
    component: <Address />,
  },
  USER_DETAILS: {
    title: <IntlMessages id="kyc.step2" />,
    component: <UserDetails />,
  },
  FUNDS_DOCUMENTS: {
    title: <IntlMessages id="settings.upload_funds" />,
    component: <Uploader documentType="SOURCE_OF_FUNDS" showStepButtons />
  },
  IDENTITY: {
    title: <IntlMessages id="kyc.step3" />,
    component: <Jumio />,
  },
  FINAL: {
    title: <IntlMessages id="kyc.finalStep" />,
    component: <Redirect to="/app/kyc_status" />,
  }
}

export default steps
