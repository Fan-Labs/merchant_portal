import React from 'react'
import PasswordWrapper from './UserDetails.style'
import Input from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import PasswordModel from '../../models/Settings/Password'

const isValid = (oldPassword, newPassword, confirmPassword) => {
  let isValid = newPassword === confirmPassword
  if(isValid && oldPassword && newPassword && confirmPassword) {
    isValid = true
  } else {
    isValid = false
  }
  return isValid
}

const Password = ({
  isLoading,
  successMessage,
  failMessage,
  oldPassword,
  newPassword,
  confirmPassword,
  updatePassword, 
  setPassword
}) => (
  <LayoutContentWrapper>
    <LayoutContent width="60%">
      <PasswordWrapper>
        <div className="row">
          <label><IntlMessages id="settings.oldPassword" /><span style={{color: 'red'}}>*</span></label>
            <Input type="password" value={oldPassword} onChange={(event) => setPassword('oldPassword', event.target.value)} />
        </div>
        <div className="row">
          <label><IntlMessages id="settings.newPassword" /><span style={{color: 'red'}}>*</span></label>
            <Input type="password" value={newPassword} onChange={(event) => setPassword('newPassword', event.target.value)} />
        </div>
        <div className="row">
          <label><IntlMessages id="settings.confirmPassword" /><span style={{color: 'red'}}>*</span></label>
            <Input type="password" value={confirmPassword} onChange={(event) => setPassword('confirmPassword', event.target.value)} />
        </div>
        <div className="update-button"> 
          <Button type="primary" loading={isLoading} onClick={updatePassword}  disabled={!isValid(oldPassword, newPassword, confirmPassword)}>
            <IntlMessages id="settings.updatePasswordButton" />
          </Button>
        </div>
        {successMessage && (
          <div className="success"><IntlMessages id={successMessage} /></div>
        )}
        {failMessage && (
          <div className="fail"><IntlMessages id={failMessage} /></div>
        )}       
      </PasswordWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)

export default PasswordModel(Password)
