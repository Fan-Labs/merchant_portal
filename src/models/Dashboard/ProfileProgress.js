import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {KYC_STATUSES} from '../../constants'
import authActions from '../../redux/auth/actions'

const { checkKYCstatus } = authActions

function mapStateToProps(state, ownprops) {
  return {
    kycStatus: state.Auth.get('kyc_status'),
    ethAddress: state.Auth.get('user').eth_address,
    phone: state.Auth.get('user').phone,
    emailVerified: state.Auth.get('user').email_verified,
    isTwoFAEnabled: state.Auth.get('user').two_factor,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    checkKYCstatus,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.calculateProgress = this.calculateProgress.bind(this)
      this.state = {
        percentageComplete: 0
      }
    }

    componentDidMount() {
      this.props.checkKYCstatus();
      this.calculateProgress()
    }

    componentDidUpdate(prevProps) {
      if(prevProps.kycStatus !== this.props.kycStatus) {
        this.calculateProgress()
      }
    }

    calculateProgress() {
      let percentageComplete = 0;
      const { kycStatus, ethAddress, phone, emailVerified, TwoFAEnabled } = this.props
      switch(kycStatus) {
        case KYC_STATUSES.AML_PENDING:
          percentageComplete += 20
          break;
        case KYC_STATUSES.ID_PENDING:
          percentageComplete += 40
          break;
        case KYC_STATUSES.PENDING:
          percentageComplete += 50
          break;
        case KYC_STATUSES.APPROVED:
          percentageComplete += 60
          break;
        default:
          break;
      }
      percentageComplete += ethAddress? 10 : 0
      percentageComplete += phone? 10 : 0
      percentageComplete += emailVerified? 10 : 0
      percentageComplete += TwoFAEnabled? 10 : 0
      this.setState({percentageComplete})
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
