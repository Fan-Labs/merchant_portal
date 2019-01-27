import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import ForgotPasswordStyleWrapper from './forgotPassword.style'
import ForgotPasswordModel from '../../models/Pages/ForgotPassword'


const ForgotPassword = ({ resetMessage, requestError, submitEmail }) => (
  <ForgotPasswordStyleWrapper className="isoForgotPassPage">
    <div className="isoFormContentWrapper">
      <div className="isoFormContent">
        <div className="isoLogoWrapper">
          <Link to="/signin">
            <IntlMessages id="page.forgetPassTitle" />
          </Link>
        </div>

        <div className="isoFormHeadText">
          <h3>
            <IntlMessages id="page.forgetPassSubTitle" />
          </h3>
          <p>
            <IntlMessages id="page.forgetPassDescription" />
          </p>
        </div>

        <form className="isoForgotPassForm" onSubmit={submitEmail}>
          <div className="isoInputWrapper">
            <Input size="large" placeholder="Email" />
          </div>

          <div className="isoInputWrapper">
            <Button type="primary" htmlType="submit" >
              <IntlMessages id="page.sendRequest" />
            </Button>
            { resetMessage && (
              <div className="message">
                <IntlMessages id={resetMessage} />
              </div>
            )}
            { !resetMessage && requestError && (
              <div className="error">
                <IntlMessages id={requestError} />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  </ForgotPasswordStyleWrapper>
)

export default ForgotPasswordModel(ForgotPassword)
