import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import authActions from '../../redux/auth/actions'

const { checkKYCstatus } = authActions

function mapStateToProps(state, ownprops) {
  return {
    kycStatus: state.Auth.get('kyc_status'),
    ethAddress: state.Auth.get('user').eth_address,
    name: state.Auth.get('user').first_name,
    isNew: state.Auth.get('new_user'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    checkKYCstatus,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    componentDidMount() {
      this.props.checkKYCstatus();
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
    checkKYCstatus: PropTypes.func.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
