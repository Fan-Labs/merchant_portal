import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { claimFomoEvent } from '../../helpers/utility'
import { MESSAGE_KEYS } from '../../constants'


const { submit_claim_error } = MESSAGE_KEYS

function mapStateToProps(state, ownprops) {
  return {
    first_name: state.Auth.get('user').first_name,
    balance: state.Funds.get('hyperion_balances'),
    isLoading: state.App.get('isLoading'),
    submitClaimError: state.Messages.get(submit_claim_error),
    tokenClaimResult: state.Funds.get('token_claim_result'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.initiateClaim = this.initiateClaim.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.state = {
        showClaimForm: false
      }
    }

    componentDidMount() {
      
     
    }

    initiateClaim(event) {
      event.preventDefault()
      this.setState({
        showClaimForm: true
      })
    }

    handleSubmit(values) {
      
    }


    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          initiateClaim={this.initiateClaim}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }

  Container.propTypes = {
    fetchFundBalances: PropTypes.func.isRequired,
    submitTokenClaim: PropTypes.func.isRequired,
    setTokenClaimResult: PropTypes.func.isRequired,
    first_name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    submitClaimError: PropTypes.string.isRequired,
    tokenClaimResult: PropTypes.string.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
