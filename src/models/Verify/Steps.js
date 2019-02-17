import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { MESSAGE_KEYS, KYC_STATUSES } from '../../constants'
import authActions from '../../redux/auth/actions'
import messageActions from '../../redux/messages/actions'
import StepMap from './StepMap'

const { clearAll } = messageActions
const { submitKYC } = authActions
const { submit_kyc_error } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    investStep: state.Invest.get('investStep'),
    addressDocuments: state.Auth.get('user').verification.address_document,
    fundsDocuments: state.Auth.get('user').verification.funds_documents,
    identity: state.Auth.get('user').verification.identity,
    questionnaire: state.Auth.get('user').verification.questionnaire,
    isLoading: state.App.get('isLoading'),
    submitKYCerror: state.Messages.get(submit_kyc_error)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitKYC,
    clearAll,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.state = {
        requiredSteps:[]
      }
    }

    componentDidMount() {
      const { addressDocuments, fundsDocuments, identity, questionnaire} = this.props
      let steps = []
     //  if(!questionnaire){
     //    steps.push('ADDRESS')
     //    steps.push('USER_DETAILS')
     //  }
     // if(fundsDocuments==='NONE' || fundsDocuments==='REJECTED') {
     //    steps.push('FUNDS_DOCUMENTS')
     // }     

      steps.push('IDENTITY')
      steps.push('FINAL')
      this.setState({requiredSteps: steps})
      //TODO CREATE COMPONENTS FOR DOCUMENT UPLOADING
      //CREATE DASHBOARD NOTIFICATIONS FOR VARIOUS PARTS OF KYC PROCESS
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
