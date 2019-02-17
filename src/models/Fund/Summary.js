import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


function mapStateToProps(state, ownProps) {
  const fund = ownProps.fund || ownProps.match.params.fund
  return {
    fund,
    summary: state.Funds.getIn(['funds', fund]),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    componentDidMount() {
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
