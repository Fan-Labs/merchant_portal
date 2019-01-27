import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import LanguageSwitcher from '../LanguageSwitcher'
import Input from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import SignInStyleWrapper from './signin.style'
import SigninModel from '../../models/Pages/Signin'


const Signin = ({ redirectToReferrer, loginErrorMessage, isLoading, handleLogin }) => (
  <React.Fragment>
    {redirectToReferrer? (
      <Redirect to={{ pathname: '/dashboard' }} />
    ) : (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="logo" />
            <div className="isoLogoWrapper">
              <Link to="/signin">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>
            <form className="isoSignInForm" onSubmit={handleLogin}>
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Email" />
              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="password" placeholder="Password" />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Button type="primary" loading={isLoading} disabled={isLoading} htmlType="submit">
                  <IntlMessages id="page.signInButton" />
                </Button>
                &nbsp;&nbsp; or &nbsp;&nbsp;
                <Link to="/signup">
                  <Button type="default" disabled={isLoading}>
                    <IntlMessages id="page.signUpButton" />
                  </Button>
                </Link>
              </div>

              <p className="isoHelperText">
                { loginErrorMessage && (<IntlMessages id={loginErrorMessage} />) }
              </p>

              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
                <LanguageSwitcher />
              </div>
            </form>
          </div>
        </div>
      </SignInStyleWrapper>
    )}
  </React.Fragment>
)


export default SigninModel(Signin);
