import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { MESSAGE_KEYS } from '../../constants'
import authActions from '../../redux/auth/actions'

const { startUpdateUser } = authActions
// const { setKYCStep } = investActions
const { user_update_error, user_update_success } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    initialValues: { eth_address: state.Auth.get('user').eth_address },
    isLoading: state.App.get('isLoading'),
    successMessage: state.Messages.get(user_update_success),
    failMessage: state.Messages.get(user_update_error),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startUpdateUser,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.updateETHAddress = this.updateETHAddress.bind(this)
    }

    updateETHAddress(values) {
      const { eth_address } = values
      this.props.startUpdateUser({eth_address: eth_address})
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          onSubmit={this.updateETHAddress}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
