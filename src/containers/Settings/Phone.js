import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import Phone from 'react-phone-input-2'
import { isValidNumber, formatNumber, AsYouType, parseNumber } from 'libphonenumber-js'
import authActions from '../../redux/auth/actions'
import PhoneWrapper, {OTPWrapper} from './Phone.style'
import Input from '../../components/uielements/input'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'
import {MESSAGE_KEYS} from '../../constants'


const { getOTPSMS, getOTPCall, verifyNumber } = authActions
const { otp_success, otp_fail, get_otp_fail } = MESSAGE_KEYS
const asYouType = new AsYouType()

class PhoneNumbers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      disableSave: true,
      showOTPModal: false,
      OTP: null,
      phoneNumber: props.phoneNumber,
    }

    this.updateNumber = this.updateNumber.bind(this)
    this.requestOTPSMS = this.requestOTPSMS.bind(this)
    this.requestOTPCall = this.requestOTPCall.bind(this)
    this.submitOTP = this.submitOTP.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  requestOTPSMS(event) {
    event.preventDefault()
    const { phoneNumber } = this.state
    this.setState({showOTPModal: true})
    this.props.getOTPSMS(formatNumber(parseNumber(phoneNumber), 'E.164'))
  }

  requestOTPCall(event) {
    event.preventDefault()
    const { phoneNumber } = this.state
    this.setState({showOTPModal: true})
    this.props.getOTPCall(formatNumber(parseNumber(phoneNumber), 'E.164'))
  }

  updateNumber(value) {
    asYouType.reset()
    const formatted = asYouType.input(value)
    this.setState({phoneNumber:formatted})
    if(value !== this.props.phoneNumber && isValidNumber(formatted)) {
      this.setState({disableSave: false})
    } else {
      this.setState({disableSave: true})
    }
  }

  submitOTP() {
    const { OTP, phoneNumber } = this.state
    this.props.verifyNumber(OTP, formatNumber(parseNumber(phoneNumber), 'E.164'))
    this.setState({showOTPModal: false})
  }

  handleEnter(event) {
    if(event.key==="Enter") {
      this.submitOTP()
    }
  }

  render() {
    const { phoneNumber, disableSave, showOTPModal } = this.state
    const { successMessage, failMessage, getOTPfailMessage, isLoading } = this.props



    return (
      <PhoneWrapper>
{ /*        <div className="2fa">
          <div className="label">
            <IntlMessages id="settings.2faLabel" />
          </div>
          <Switch defaultChecked onChange={onChange} />

        </div>
  */}
          <div className="header">
            <IntlMessages id="settings.phoneExplainer" />
          </div>
        <div className="row">
          <div>
            <Phone
              placeholder="Enter phone number"
              value={ phoneNumber }
              onChange={ this.updateNumber }
              enableLongNumbers={true}
            />
          </div>
          <Button type="normal" disabled={disableSave} onClick={this.requestOTPSMS} className="verifyButton" loading={isLoading}>
            <IntlMessages id="settings.verifyNumberSMSButton" />
          </Button>
          <Button type="normal" disabled={disableSave} onClick={this.requestOTPCall} className="verifyButton" loading={isLoading}>
            <IntlMessages id="settings.verifyNumberCallButton" />
          </Button>
        </div>
        <div className="row">
          {successMessage && (
            <div className="success">
              <IntlMessages id={successMessage} />
            </div>
          )}
          {failMessage && (
            <div className="error">
              <IntlMessages id={failMessage} />
            </div>
          )}
        </div>
        <Modal
          visible={showOTPModal}
          onOk={this.submitOTP}
          onCancel={() => this.setState({showOTPModal: false})}
        >
          <OTPWrapper>
            <div className="label">
              <IntlMessages id="settings.OTPLabel" />
              <div className="resend" onClick={this.requestOTP}>
                <IntlMessages id="settings.resendOTP" />
              </div>
            </div>
            <Input
              onChange={(event) => this.setState({OTP: event.target.value})}
              onKeyPress={this.handleEnter}
            />
            {getOTPfailMessage && (
              <div className="error">
                <IntlMessages id={getOTPfailMessage} />
              </div>
            )}
          </OTPWrapper>
        </Modal>
      </PhoneWrapper>
    );
  }
}

export default connect(
  state => ({
    phoneNumber: state.Auth.get('user').phone,
    OTP: state.Auth.get('OTP'),
    isLoading: state.App.get('isLoading'),
    getOTPfailMessage: state.Messages.get(get_otp_fail),
    successMessage: state.Messages.get(otp_success),
    failMessage: state.Messages.get(otp_fail),
  }),
  { getOTPSMS, getOTPCall, verifyNumber }
)(PhoneNumbers)

