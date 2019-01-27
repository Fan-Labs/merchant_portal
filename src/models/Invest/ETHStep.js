import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import investActions from '../../redux/invest/actions'

const { setInvestStep } = investActions

function mapStateToProps(state, ownprops) {
  return {
    investStep: state.Invest.get('investStep'),
    eth_address: state.Auth.get('user').eth_address
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setInvestStep,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)

      this.next = this.next.bind(this)
      this.prev = this.prev.bind(this)

    }

    next() {
      const current = this.props.investStep
      this.props.setInvestStep(current + 1);
    }
    prev() {
      const current = this.props.investStep
      this.props.setInvestStep(current - 1);
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          next={this.next}
          prev={this.prev}
        />
      );
    }
  }

  Container.propTypes = {
    investStep: PropTypes.number.isRequired,
    setInvestStep: PropTypes.func.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
