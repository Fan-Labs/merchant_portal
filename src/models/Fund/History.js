import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



function mapStateToProps(state, ownprops) {
  return {
    tokenClaimResult: state.Funds.get('token_claim_result'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    componentWillUnmount() {
      this.props.setTokenClaimResult(null)
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
