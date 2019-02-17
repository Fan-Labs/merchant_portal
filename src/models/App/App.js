import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import authActions from '../../redux/auth/actions'
import appActions from '../../redux/app/actions'


//const {  } = authActions;
const { toggleAll } = appActions;

function mapStateToProps(state, ownprops) {
  return {
    locale: state.LanguageSwitcher.toJS().language.locale,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleAll
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
    locale: PropTypes.string.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
