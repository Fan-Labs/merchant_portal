import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import authActions from '../../redux/auth/actions'
import investActions from '../../redux/invest/actions'
import { MESSAGE_KEYS } from '../../constants'
import { tryParseJSON, captureEvent } from '../../helpers/utility'

const { setInvestStep } = investActions
const { c20validate, requestC20Message } = authActions
const { c20_message_fail, c20_verify_fail } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    isC20Verified: state.Auth.get('user').invested,
    userId: state.Auth.get('user').id,
    apiMessage: state.Messages.get(c20_verify_fail),
    retrieveError: state.Messages.get(c20_message_fail),
    c20Message: state.Invest.get('c20Message'),
    isLoading: state.App.get('isLoading')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    c20validate,
    setInvestStep,
    requestC20Message
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.state = {
        verifyString: null,
        isValid: true,
        errorMessage: null,
        showModal: false,
      }
      this.textEdit = this.textEdit.bind(this)
      this.validate = this.validate.bind(this)
      this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(event) {
      event.preventDefault()
      this.setState({showModal: !this.state.showModal})
    }

    textEdit(event) {
      let isValid

      if(event.target.value) {
        isValid = tryParseJSON(event.target.value)
      } else {
        isValid = true
      }

      this.setState({
        verifyString: event.target.value,
        isValid,
      })
    }

    validate() {
      const { userId, c20validate } = this.props
      const { verifyString, isValid } = this.state
      //verify that address message and signature keys are present
      const {message, signature, address, msg, sig} = JSON.parse(verifyString)
      if(message && signature && address) {
        if(isValid) {
          c20validate(message, signature, address)
        }
      } else if (msg && sig && address){
        if(isValid) {
          c20validate(msg, sig, address)
          captureEvent("User", "C20 Validate Attempt", `User: ${userId}`)
        }
      }else {
        this.setState({
          errorMessage: "Make sure you include the following keys: message, address and signature",
          isValid: false,
        })
      }
    }

    componentDidMount() {
      const { requestC20Message } = this.props
      requestC20Message()
    }

    componentDidUpdate() {
      const { userId } = this.props
      if(this.props.isC20Verified) {
        captureEvent("User", "C20 Validate Success", `User: ${userId}`)
        this.props.setInvestStep()
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          validate={this.validate}
          textEdit={this.textEdit}
          toggleModal={this.toggleModal}
        />
      );
    }
  }

  Container.propTypes = {
    c20validate: PropTypes.func.isRequired,
    setInvestStep: PropTypes.func.isRequired,
    requestC20Message: PropTypes.func.isRequired,
    isC20Verified: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    apiMessage: PropTypes.string.isRequired,
    retrieveError: PropTypes.string.isRequired,
    c20Message: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
