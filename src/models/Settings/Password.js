import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import authActions from '../../redux/auth/actions';
import {MESSAGE_KEYS} from '../../constants'

const { updatePassword } = authActions
const { password_update_error, password_update_success } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    isLoading: state.App.get('isLoading'),
    successMessage: state.Messages.get(password_update_success),
    failMessage: state.Messages.get(password_update_error),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updatePassword
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.state = {
        oldPassword: null,
        newPassword: null,
        confirmPassword: null,
      }

      this.updatePassword = this.updatePassword.bind(this)
      this.setPassword = this.setPassword.bind(this)
    }

    updatePassword() {
      const { newPassword, confirmPassword, oldPassword } = this.state
      if(oldPassword && (newPassword === confirmPassword)) {
        this.props.updatePassword(oldPassword, newPassword)
      }
    }

    setPassword(key, value) {
      let updated = this.state
      updated[key] = value
      this.setState(updated)
    }



    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          setPassword={this.setPassword}
          updatePassword={this.updatePassword}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
