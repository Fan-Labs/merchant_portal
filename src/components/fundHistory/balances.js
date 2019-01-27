import React, { Component } from 'react';
import { connect } from 'react-redux'
import IntlMessages from '../utility/intlMessages'
import fundActions from '../../redux/funds/actions'
import Wrapper from './balances.style'

const { fetchFundBalances } = fundActions

class Balances extends Component {
  componentDidMount() {
    this.props.fetchFundBalances(this.props.fund)
  }

  formatBalance(balances) {
    if (balances) {
      return (Math.floor(balances * 100000) / 100000)
    }
    return balances;
  }

  render() {
    const { fund, balances } = this.props;
    const formattedBalances = this.formatBalance(balances);
    return (
      <Wrapper>
        <div className="page-subtitle">
          <IntlMessages id="history.tableTitleBalances"
            values={{
              fund,
              formattedBalances
            }}
          />
        </div>
      </Wrapper>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    isLoading: state.App.get('isLoading'),
    balances: state.Funds.get(ownProps.fund+'_balances'),
  }),
  { fetchFundBalances }
)(Balances);
