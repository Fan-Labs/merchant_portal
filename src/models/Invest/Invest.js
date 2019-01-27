import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function mapStateToProps(state, ownprops) {
  return {
    isOpen: !state.Invest.get('icoClosed'),
    isKYCVerified: state.Auth.get('user').verified,
    kycStatus: state.Auth.get('kyc_status'),
  };
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.agree = this.agree.bind(this)
      this.state = {
        termsAgreed: false,
      }
    }

    agree(event) {
      event.preventDefault()
      this.setState({termsAgreed: true})
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          agree={this.agree}
        />
      );
    }
  }

  Container.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isKYCVerified: PropTypes.bool.isRequired,
    kycStatus: PropTypes.string.isRequired,
  }

  return connect(mapStateToProps)(Container);
}

export default createContainer;
