import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


function mapStateToProps(state, ownprops) {
  return {
    selectedCurrency: state.Invest.get('selectedCurrency'),
    isLoading: state.App.get('isLoading'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {
    
    constructor(props) {
      super(props)
      this.select = this.select.bind(this)
    }

    select(currency) {
      this.props.setCurrency(currency)
      this.props.setInvestStep()
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          select={this.select}
        />
      );
    }
  }

  Container.propTypes = {
    getRates: PropTypes.func.isRequired,
    setInvestStep: PropTypes.func.isRequired,
    setCurrency: PropTypes.func.isRequired,
    selectedCurrency: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
