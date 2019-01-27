import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import authActions from '../../redux/auth/actions'
import appActions from '../../redux/app/actions'
import investActions from '../../redux/invest/actions'

const { checkKYCstatus, fetchAMLDocList } = authActions;
const { getRates } = investActions;
const { toggleAll } = appActions;

function mapStateToProps(state, ownprops) {
  return {
    showOTPModal: state.Auth.get('show_otp_modal'),
    locale: state.LanguageSwitcher.toJS().language.locale,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleAll,
    checkKYCstatus,
    getRates,
    fetchAMLDocList
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    render() {
      return (
        <ComposedComponent
          {...this.props}
        />
      );
    }
  }

  Container.propTypes = {
    toggleAll: PropTypes.func.isRequired,
    getRates: PropTypes.func.isRequired,
    checkKYCstatus: PropTypes.func.isRequired,
    showOTPModal: PropTypes.bool.isRequired,
    locale: PropTypes.string.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
