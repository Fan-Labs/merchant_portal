import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fundActions from '../../redux/funds/actions'

const { fetchFundSummary } = fundActions

function mapStateToProps(state, ownProps) {
  const fund = ownProps.fund || ownProps.match.params.fund
  return {
    fund,
    summary: state.Funds.getIn(['funds', fund]),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFundSummary
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    componentDidMount() {
      this.props.fetchFundSummary(this.props.fund)
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
