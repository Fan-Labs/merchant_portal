import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import authActions from '../../redux/auth/actions'


function mapStateToProps(state, ownprops) {
  return {
    user: state.Auth.get('user'),
    isNew: state.Auth.get('new_user'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
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

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
