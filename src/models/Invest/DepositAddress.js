import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import investActions from '../../redux/invest/actions'

const { retrieveAddress, setInvestStep, pollForConfirmation } = investActions

function mapStateToProps(state, ownprops) {
  return {
    selectedCurrency: state.Invest.get('selectedCurrency'),
    investAddress: state.Invest.get('investAddress'),
    rates: state.Invest.get(ownprops.fund),
    transactionConfirmed: state.Invest.get('transactionConfirmed'),
    isLoading: state.App.get('isLoading'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    retrieveAddress,
    setInvestStep,
    pollForConfirmation,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    componentDidMount() {
      const { selectedCurrency, fund } = this.props
      this.props.retrieveAddress(selectedCurrency, fund) //funds will have to be passed as prop in future
      this.firstTimer = setInterval(this.props.pollForConfirmation, 5000)
    }

    componentWillUnmount() {
      clearInterval(this.firstTimer);
    }

    getDerivedStateFromProps(nextProps, prevState) {
      if(nextProps.transactionConfirmed){
        clearInterval(this.firstTimer);
      }
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
