import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import investActions from '../../redux/invest/actions'
import ETHAddress from '../../containers/Flows/DefaultETHStep'
import Deposit from '../../containers/Flows/Deposit'
import DepositAddress from '../../containers/Flows/DepositAddress'
import TransactionFeedback from '../../containers/Flows/TransactionFeedback'

const { setInvestStep } = investActions

function mapStateToProps(state, ownprops) {
  return {
    investStep: state.Invest.get('investStep'),
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

      const investSteps = [{
        title: "Claim Address",
        component: <ETHAddress />,
      },
      {
        title: "Choose Currency",
        component: <Deposit />,
      },
      {
        title: "Deposit Address",
        component: <DepositAddress fund={props.fund} />,
      },
      {
        title: "Confirmation",
        component: <TransactionFeedback />,
      }]

      this.state = {
        steps: investSteps,
      }

      this.next = this.next.bind(this)
      this.prev = this.prev.bind(this)

    }

    componentWillUnmount() {
      this.props.setInvestStep(0)
    }

    componentDidMount() {
      this.props.setInvestStep(0)
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
