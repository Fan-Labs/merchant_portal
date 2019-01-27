import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MESSAGE_KEYS } from '../../constants'
import authActions from '../../redux/auth/actions' 

const { request_reset_email, request_reset_email_error } = MESSAGE_KEYS
const { requestResetEmail } = authActions

function mapStateToProps(state, ownprops) {
  return {
    resetMessage: state.Messages.get(request_reset_email),
    requestError: state.Messages.get(request_reset_email_error),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestResetEmail,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.submitEmail = this.submitEmail.bind(this)
    }
  
    submitEmail(event) {
      event.preventDefault()
      const { requestResetEmail } = this.props;
      requestResetEmail(event.target[0].value);
      //this.props.history.push('/dashboard');
    }


    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          submitEmail={this.submitEmail}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
