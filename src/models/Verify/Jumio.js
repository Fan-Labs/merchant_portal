import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import authActions from '../../redux/auth/actions'
import investActions from '../../redux/invest/actions'

const { getJumioToken, refreshToken } = authActions
const { setInvestStep } = investActions

function mapStateToProps(state, ownprops) {
  return {
    kycAuthToken: state.Auth.get('kyc_auth_token'),
    kycStatus: state.Auth.get('user').verification.identity,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getJumioToken,
    setInvestStep,
    refreshToken,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.pollForConfirmation = this.pollForConfirmation.bind(this)
    }

    pollForConfirmation() {
      this.props.refreshToken()
    }

    componentWillUnmount() {
      clearInterval(this.firstTimer);
    }

    componentDidMount() {
      const { getJumioToken } = this.props
      this.firstTimer = setInterval(this.pollForConfirmation, 5000)
      getJumioToken()      
    }

    componentDidUpdate(oldProps) {
      if(oldProps.kycAuthToken===null && this.props.kycAuthToken) {
        window.JumioClient.setVars({ 
          authorizationToken: this.props.kycAuthToken,
          clientWidth: "responsive"
        }).initVerify("JUMIOIFRAME");   
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
        />
      );
    }
  }

  Container.propTypes = {
    kycStatus: PropTypes.string.isRequired,
    kycAuthToken: PropTypes.string.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
