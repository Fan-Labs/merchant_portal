import React from 'react'
import QRCode from 'react-qr-code'
import { Spin, Switch } from 'antd'
import TwoFAWrapper from './2FA.style'
import Input from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import TwoFAModel from '../../models/Settings/2FA'

const TwoFA = ({
  twoFAEnabled,
  qrCodeString,
  isLoading,
  errorMessage,
  submitOTPFail,
  disableError,
  hasPhone,
  disable,
  enable2FA,
  onChange,
  fetchQR,
  handleEnter,
  showDisable,
  shouldShowDisable,
  showEnable,
  OTP,
}) => (
  <TwoFAWrapper>
    <div className="explainer">
      <IntlMessages id="settings.2faExplainer" />
    </div>
    <div className="steps">
      <IntlMessages id="settings.2faStep1"
        values={{
          linkItunes: <a href="https://itunes.apple.com/app/google-authenticator/id388497605?mt=8" target="_blank" rel="noopener noreferrer">iTunes</a>,
          linkPlaystore: <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2" target="_blank" rel="noopener noreferrer">Google Play Store</a>
        }} />
      <IntlMessages id="settings.2faStep2" />
    </div>
    {!hasPhone? (
      <div className="explainer">
        <IntlMessages id="settings.phoneRequired" />
      </div>
    ) : (
      <React.Fragment>
        {!twoFAEnabled? (
          <div className="card">
            <div className="explainer">
              <IntlMessages id="settings.2faInstructions"
                values={{
                    name: 'Eric'
                }}
               />
            </div>
            {isLoading? (
              <Spin size="large" />
            ) : (
              <React.Fragment>
              {!showEnable? (
                <Switch
                  checked={showEnable}
                  onChange={fetchQR}
                />
                ):(
                <React.Fragment>
                    {qrCodeString && (
                    <React.Fragment>
                       <QRCode value={qrCodeString} size={120}  />
                       <div className="provisioning">
                        {qrCodeString}
                       </div>
                       <div className="centered-column">
                        <IntlMessages id="settings.enterOTP"/><br/>
                        <Input size="large" placeholder="OTP" onChange={onChange} onKeyPress={handleEnter} /><br/>
                        <Button type="normal" onClick={enable2FA} disabled={OTP? false : true}>
                          <IntlMessages id="settings.submitOTP"/>
                        </Button>
                       </div>
                    </React.Fragment>
                    )}
                  </React.Fragment>
                )}

              </React.Fragment>

            )}
            {errorMessage && (
              <div className="error">
                <IntlMessages id={errorMessage} />
              </div>
            )}
            {submitOTPFail && (
              <div className="error">
                <IntlMessages id={submitOTPFail} />
              </div>
            )}
          </div>
        ) : (
          <div className="card">
            <div className="explainer">
              <IntlMessages id="settings.2faIsEnabled" />
            </div>
            {!hasPhone && (
              <div className="warning">
                <IntlMessages id="settings.backupPhone" />
              </div>
            )}
            {shouldShowDisable? (
              <form onSubmit={disable}>
                <label><IntlMessages id="settings.enterPassword" /></label>
                <Input size="large" type="password" placeholder="Password" />
                <Button type="normal" loading={isLoading} htmlType="submit" style={{marginTop: '15px'}}><IntlMessages id="settings.disable2FA"/></Button>
              </form>
              )
              :
              (<Switch
              checked={twoFAEnabled}
              onChange={showDisable}
            />)}
            {disableError && (
              <div className="error">
                <IntlMessages id={disableError} />
              </div>
            )}
          </div>
        )}
      </React.Fragment>
    )}
  </TwoFAWrapper>
)

export default TwoFAModel(TwoFA)
