import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  fetchFunds,
} from '../../redux/funds/actions'

function mapStateToProps(state, ownprops) {
  return {
    funds: state.Funds.get('funds'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFunds,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    componentDidMount() {
      this.props.fetchFunds();
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
    fetchSessions: PropTypes.func.isRequired,
    fetchRecordings: PropTypes.func.isRequired,
    fetchFreeMusic: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
