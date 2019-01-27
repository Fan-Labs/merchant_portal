import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { MESSAGE_KEYS } from '../../constants'
import investActions from '../../redux/invest/actions'
import authActions from '../../redux/auth/actions'
import messageActions from '../../redux/messages/actions'

const { setInvestStep } = investActions
const { clearAll } = messageActions
const { submitKYC, fetchAMLDocList } = authActions
const { submit_kyc_error } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    kycAuthToken: state.Auth.get('kyc_auth_token'),
    showAddressUpload: state.Auth.get('user').verification.address_document,
    questionnaire: state.Auth.get('user').verification.questionnaire,
    investStep: state.Invest.get('investStep'),
    isLoading: state.App.get('isLoading'),
    submitKYCerror: state.Messages.get(submit_kyc_error)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setInvestStep,
    submitKYC,
    clearAll,
    fetchAMLDocList
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
      const { submitKYC } = this.props
      submitKYC(values)
    }

    componentDidUpdate(oldProps) {

      //increment invest step if the update was a questionnaire successfully submitted
      if(oldProps.questionnaire===false && this.props.questionnaire) {
        debugger
        this.prop.setInvestStep()
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          onSubmit={this.onSubmit}
        />
      );
    }
  }

  Container.propTypes = {
    kycAuthToken: PropTypes.string.isRequired,
    kycStep: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    submitKYCerror: PropTypes.string.isRequired,
    setKYCStep: PropTypes.func.isRequired,
    submitKYC: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
