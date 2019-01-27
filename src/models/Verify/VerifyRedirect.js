import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { captureEvent, kycFomoEvent } from '../../helpers/utility'
import queryString from 'query-string'
import authActions from '../../redux/auth/actions'

const { idVerifySuccess } = authActions

function mapStateToProps(state, ownprops) {
  return {
    isLoading: state.App.get('isLoading'),
    userId: state.Auth.get('user').id,
    first_name: state.Auth.get('user').first_name,
    kycAuthToken: state.Auth.get('kyc_auth_token'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    idVerifySuccess,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props){
      super(props)
      this.state = {
        didSucceed: false,
        params: null,
      }
    }

    componentDidMount(){
      const { userId, first_name, location: { search } } = this.props
      const params = queryString.parse(search)
      const { idScanStatus } = params
      this.setState({params: params})
      if(idScanStatus === 'SUCCESS') {
        this.props.idVerifySuccess(this.props.kycAuthToken)
        captureEvent("Users", "KYC success", `User: ${userId}`)
        kycFomoEvent(first_name)
        this.setState({didSucceed: true})
      } else {
        captureEvent("Users", "KYC fail", `User: ${userId}`)
        this.setState({didSucceed: false})
      }
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

  Container.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
