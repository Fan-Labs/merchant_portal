import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import authActions from '../../redux/auth/actions'

const { checkKYCstatus } = authActions

function mapStateToProps(state, ownprops) {
  return {
    isLoading: state.App.get('isLoading'),
    kycStatus: state.Auth.get('kyc_status'),
  }
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
    isLoading: PropTypes.bool.isRequired,
    kycStatus: PropTypes.string.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
