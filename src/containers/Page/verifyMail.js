import React from 'react'
import { Link } from 'react-router-dom'
import IntlMessages from '../../components/utility/intlMessages'
import ResetPasswordStyleWrapper from './resetPassword.style'
import VerifyMailModel from '../../models/Pages/VerifyMail'

const VerifyMail = ({ verifiedMessage, verifyErrorMessage, showTokenMessage }) => (
  <ResetPasswordStyleWrapper className="isoResetPassPage">
    <div className="isoFormContentWrapper">
      <div className="isoFormContent">
        <div className="isoLogoWrapper">
          <Link to="/signin">
            <IntlMessages id="page.resetPassTitle" />
          </Link>
        </div>

        <div className="isoResetPassForm" >
          <div className="isoInputWrapper">
            {verifiedMessage && (
              <div className="successMessage"><IntlMessages id={verifiedMessage} /></div>
            )}
            {showTokenMessage && (
              <div className="message"><IntlMessages id="page.noResetToken" /></div>
            )}
            {verifyErrorMessage && (
              <div className="message"><IntlMessages id={verifyErrorMessage} /></div>
            )}
          </div>
        </div>
      </div>
    </div>
  </ResetPasswordStyleWrapper>
)

export default VerifyMailModel(VerifyMail)
