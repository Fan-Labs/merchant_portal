import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import authActions from '../../redux/auth/actions'
import { MESSAGE_KEYS } from '../../constants'


const { get2FACode, submitOTP, disable2FA } = authActions
const { get_qr_fail, submit_otp_error, disable_2fa_error } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    twoFAEnabled: state.Auth.get('user').two_factor,
    hasPhone: state.Auth.get('user').phone,
    qrCodeString: state.Auth.get('provisioning_uri'),
    isLoading: state.App.get('isLoading'),
    errorMessage: state.Messages.get(get_qr_fail),
    submitOTPFail: state.Messages.get(submit_otp_error),
    disableError: state.Messages.get(disable_2fa_error)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    get2FACode,
    submitOTP,
    disable2FA
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.state = {
        OTP: null,
        shouldShowDisable: false,
        showEnable: false,
      }
      this.onChange = this.onChange.bind(this)
      this.enable2FA = this.enable2FA.bind(this)
      this.onSuccess = this.onSuccess.bind(this)
      this.onFail = this.onFail.bind(this)
      this.disable = this.disable.bind(this)
      this.showDisable = this.showDisable.bind(this)
      this.fetchQR = this.fetchQR.bind(this)
      this.handleEnter = this.handleEnter.bind(this)
    }

    handleEnter(event) {
      if(event.key==="Enter") {
        this.enable2FA()
      }
    }

    fetchQR() {
      this.setState({showEnable: true})
      const { twoFAEnabled, get2FACode, qrCodeString } = this.props
      if(!twoFAEnabled && !qrCodeString){
        get2FACode()
      }
    }

    onChange(event) {
      this.setState({
        OTP: event.target.value,
      })
    }

    enable2FA() {
      const { OTP } = this.state
      const { submitOTP } = this.props
      if (OTP) {
        submitOTP(OTP, this.onSuccess, this.onFail)
      }
    }

    onSuccess() {
      console.log("success");
    }

    onFail() {
      console.log("fail");
    }

    showDisable() {
      this.setState({shouldShowDisable: true})
    }

    disable(event) {
      event.preventDefault()
      const { disable2FA } = this.props
      disable2FA(event.target[0].value)
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          disable={this.disable}
          showDisable={this.showDisable}
          enable2FA={this.enable2FA}
          onChange={this.onChange}
          fetchQR={this.fetchQR}
          handleEnter={this.handleEnter}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
