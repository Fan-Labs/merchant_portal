import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {MESSAGE_KEYS} from '../../constants'
import authActions from '../../redux/auth/actions'

const { getOTPSMS, getOTPCall, verifyNumber } = authActions
const { otp_success, otp_fail, get_otp_fail } = MESSAGE_KEYS


function mapStateToProps(state, ownprops) {
  return {
    phoneNumber: state.Auth.get('user').phone,
    OTP: state.Auth.get('OTP'),
    isLoading: state.App.get('isLoading'),
    getOTPfailMessage: state.Messages.get(get_otp_fail),
    successMessage: state.Messages.get(otp_success),
    failMessage: state.Messages.get(otp_fail),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getOTPSMS,
    getOTPCall,
    verifyNumber
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.state = {
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
      this.closeModal = this.closeModal.bind(this)
      this.onOTPChange = this.onOTPChange.bind(this)
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

    closeModal() {
      this.setState({showOTPModal: false})
    }

    onOTPChange(event) {
      this.setState({OTP: event.target.value})
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          handleEnter={this.handleEnter}
          submitOTP={this.submitOTP}
          updateNumber={this.updateNumber}
          requestOTPCall={this.requestOTPCall}
          requestOTPSMS={this.requestOTPSMS} 
          closeModal={this.closeModal}
          onOTPChange={this.onOTPChange}  
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
