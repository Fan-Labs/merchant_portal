import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { MESSAGE_KEYS } from '../../constants'
import messageActions from '../../redux/messages/actions'
import authActions from '../../redux/auth/actions'

const { setMessage } = messageActions
const { submitResetPassword } = authActions
const { password_reset_error } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    resetMessage: state.Messages.get(password_reset_error),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setMessage,
    submitResetPassword,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.handleReset = this.handleReset.bind(this)
    }

    handleReset(event) {
      event.preventDefault()
      const { submitResetPassword, setMessage, intl, location: { search } } = this.props

      const { token } = queryString.parse(search)
      const newPassword = event.target[0].value
      const confirmPassword = event.target[1].value

      if(!token) {
        setMessage(password_reset_error, intl.formatMessage({id: "page.noResetToken"}))
      } else if(newPassword === confirmPassword) {
        submitResetPassword(newPassword, token)
      } else {
        setMessage(password_reset_error, intl.formatMessage({id: "page.resetPassMismatch"}))
      }
    }


    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          handleReset={this.handleReset}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
