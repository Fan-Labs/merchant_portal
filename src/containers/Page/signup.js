import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/uielements/input'
import Checkbox from '../../components/uielements/checkbox'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import SignUpStyleWrapper from './signup.style'
import SignUpModel from '../../models/Pages/Signup'

const SignUp = ({
  agreedToTerms,
  first_name,
  last_name,
  email,
  password,
  confirm_password,
  showRequiredMessage,
  showPasswordMessage,
  showEmailMessage,
  signupErrorMessages,
  handleUpdate,
  onChange,
  handleSignup,
}) => (
  <SignUpStyleWrapper className="isoSignUpPage">
    <div className="isoSignUpContentWrapper">
      <div className="isoSignUpContent">
        <div className="logo" />
        <div className="isoLogoWrapper">
          <Link to="/signin">
            <IntlMessages id="page.signInTitle" />
          </Link>
        </div>

        <form className="isoSignUpForm" onSubmit={handleSignup}>
          <div className="isoInputWrapper isoLeftRightComponent">
            <Input size="large" placeholder="First name" name="first_name" value={first_name} onChange={handleUpdate} className={first_name? '' : 'required'} />
            <Input size="large" placeholder="Last name"  name="last_name" value={last_name} onChange={handleUpdate} className={last_name? '' : 'required'} />
          </div>

          <div className="isoInputWrapper">
            <Input size="large" placeholder="Email"  name="email" value={email} onChange={handleUpdate} className={email? '' : 'required'} />
          </div>

          <div className="isoInputWrapper">
            <Input size="large" type="password" placeholder="Password"  name="password" value={password} onChange={handleUpdate} className={password? '' : 'required'} />
          </div>

          <div className="isoInputWrapper">
            <Input
              size="large"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={confirm_password}
              onChange={handleUpdate}
              className={confirm_password? '' : 'required'}
            />
          </div>

          <div className="isoInputWrapper" style={{ marginBottom: '50px' }}>
            <Checkbox
              checked={agreedToTerms}
              onChange={onChange}
              >
                <a href="https://invictuscapital.com/legal" target="_blank" rel="noopener noreferrer">
                  <IntlMessages id="page.signUpTermsConditions" />
                </a>
            </Checkbox>
          </div>

          <div className="isoInputWrapper">
            <Button type="primary" disabled={!agreedToTerms} htmlType="submit">
              <IntlMessages id="page.signUpButton" />
            </Button>
            <div className="message">
              {showRequiredMessage && (<React.Fragment><IntlMessages id="page.signupRequired" /><br/></React.Fragment>)}
              {showPasswordMessage && (<React.Fragment><IntlMessages id="page.resetPassMismatch" /><br/></React.Fragment>)}
              {showEmailMessage && (<React.Fragment><IntlMessages id="page.invalidEmail" /><br/></React.Fragment>)}
              {signupErrorMessages}
            </div>
          </div>
          <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
            <Link to="/signin">
              <IntlMessages id="page.signUpAlreadyAccount" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  </SignUpStyleWrapper>
)

export default SignUpModel(SignUp);
