import React from 'react'
import { Link } from 'react-router-dom'
import {injectIntl} from 'react-intl'
import Input from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import ResetPasswordStyleWrapper from './resetPassword.style'
import PasswordResetModel from '../../models/Pages/ResetPassword'


const PasswordReset = ({ resetMessage, handleReset }) => (
  <ResetPasswordStyleWrapper className="isoResetPassPage">
    <div className="isoFormContentWrapper">
      <div className="isoFormContent">
        <div className="isoLogoWrapper">
          <Link to="/signin">
            <IntlMessages id="page.resetPassTitle" />
          </Link>
        </div>

        <div className="isoFormHeadText">
          <h3>
            <IntlMessages id="page.resetPassSubTitle" />
          </h3>
          <p>
            <IntlMessages id="page.resetPassDescription" />
          </p>
        </div>

        <form className="isoResetPassForm" onSubmit={handleReset}>
          <div className="isoInputWrapper">
            <Input
              size="large"
              type="password"
              placeholder="New Password"
            />
          </div>

          <div className="isoInputWrapper">
            <Input
              size="large"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="isoInputWrapper">
            <Button type="primary" htmlType="submit">
              <IntlMessages id="page.resetPassSave" />
            </Button>
            {resetMessage && (
              <div className="message"><IntlMessages id={resetMessage} /></div>
            )}
          </div>
        </form>
      </div>
    </div>
  </ResetPasswordStyleWrapper>
)

export default injectIntl(PasswordResetModel(PasswordReset))
