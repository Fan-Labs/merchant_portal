import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(state, ownprops) {
  return {
    transactionConfirmed: state.Invest.get('transactionConfirmed'),
    selectedCurrency: state.Invest.get('selectedCurrency'),
    isLoading: state.App.get('isLoading'),
    userId: state.Auth.get('user').id,
    first_name: state.Auth.get('user').first_name,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

  componentDidMount() {
    const { userId, first_name, selectedCurrency } = this.props
  }

  componentWillUnmount() {
    this.props.setConfirmation(false)
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
