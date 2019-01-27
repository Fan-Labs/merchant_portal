import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import IntlMessages from '../../components/utility/intlMessages'
import Button from '../../components/uielements/button'
import Input from '../../components/uielements/input'
import OTPWrapper from './OTP.style'
import authActions from '../../redux/auth/actions'
import appActions from '../../redux/app/actions'
import { MESSAGE_KEYS } from '../../constants'

const { dismissOTP, requestBackupOTPSMS, requestBackupOTPCall } = authActions
const { repeatWithOTP } = appActions
const { submit_otp_error, backup_otp_success, backup_otp_error } = MESSAGE_KEYS

class OTPModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      OTP: null,
      showBackupSMS: false,
      showBackupCall: false,
    }
    this.onChange = this.onChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleBackupSMS = this.toggleBackupSMS.bind(this)
    this.toggleBackupCall = this.toggleBackupCall.bind(this)
    this.requestOTPSMS = this.requestOTPSMS.bind(this)
    this.requestOTPCall = this.requestOTPCall.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  onChange(event) {
    this.setState({
      OTP: event.target.value
    })
  }

  handleCancel() {
    const { dismissOTP } = this.props
    this.setState({showBackupSMS: false})
    this.setState({showBackupCall: false})
    dismissOTP()
  }

  handleSubmit() {
    const { OTP } = this.state
    this.props.repeatWithOTP(OTP)
  }

  toggleBackupSMS() {
    this.setState({showBackupSMS: !this.state.showBackupSMS})
  }

  toggleBackupCall() {
    this.setState({showBackupCall: !this.state.showBackupCall})
  }

  requestOTPSMS(event) {
    event.preventDefault()
    this.props.requestBackupOTPSMS(event.target[0].value, event.target[1].value)
  }

  requestOTPCall(event) {
    event.preventDefault()
    this.props.requestBackupOTPCall(event.target[0].value, event.target[1].value)
  }

  handleEnter(event) {
    if(event.key==="Enter") {
      this.handleSubmit()
    }
  }
  //TODO backup call/SMS shouldn't have a submit button if it has a request call/SMS button
  
  render() {
    const { showOTPModal, submitOTPFail } = this.props
    const { showBackupSMS, showBackupCall } = this.state
    return (
      <div>
      <Modal
        visible={showOTPModal}
        okText="Submit"
        onCancel={this.handleCancel}
        onOk={this.handleSubmit}
        title={<IntlMessages id="auth.enterOTP" />}
      >
        <OTPWrapper>
          <Input size="large" placeholder="OTP" onChange={this.onChange} className="field" onKeyPress={this.handleEnter} />
          <React.Fragment>
            {showBackupSMS? (
              <form onSubmit={this.requestOTPSMS}>
              <div className="login">
                <IntlMessages id="settings.otpLoginDetails" />
              </div>
              <Input size="large" placeholder="Email" className="field" />
              <Input size="large" type="password" placeholder="Password" className="field" />
              <Button type="normal" htmlType="submit">
                <IntlMessages id="settings.requestBackupSMS" />
              </Button>
            </form>
            ) :
            showBackupCall? (
              <form onSubmit={this.requestOTPCall}>
              <div className="login">
                <IntlMessages id="settings.otpLoginDetails" />
              </div>
              <Input size="large" placeholder="Email" className="field" />
              <Input size="large" type="password" placeholder="Password" className="field" />
              <Button type="normal" htmlType="submit">
                <IntlMessages id="settings.requestBackupCall" />
              </Button>
            </form>
            ) : (
              <div>
                <Button type="normal" onClick={this.toggleBackupSMS} className="backup">
                  <IntlMessages id="settings.showBackupSMS" />
                </Button>
                <Button type="normal" onClick={this.toggleBackupCall} className="backup">
                  <IntlMessages id="settings.showBackupCall" />
                </Button>
              </div>
            )}
            {submitOTPFail && (
              <div className="error">
                <IntlMessages id={submitOTPFail} />
              </div>
            )}
            {submitOTPFail && (
              <div className="error">
                <IntlMessages id={submitOTPFail} />
              </div>
            )}
            {submitOTPFail && (
              <div className="error">
                <IntlMessages id={submitOTPFail} />
              </div>
            )}
          </React.Fragment>
        </OTPWrapper>
      </Modal>
      </div>
    );
  }
}

export default connect(
  state => ({
    showOTPModal: state.Auth.get('show_otp_modal'),
    submitOTPFail: state.Messages.get(submit_otp_error),
    sendOTPSuccess: state.Messages.get(backup_otp_success),
    requestOTPError: state.Messages.get(backup_otp_error),
  }),
  {dismissOTP, repeatWithOTP, requestBackupOTPSMS, requestBackupOTPCall}
)(OTPModal);
