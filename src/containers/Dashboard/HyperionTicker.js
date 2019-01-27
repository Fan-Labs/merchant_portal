import React, { Component } from 'react'
import { connect } from 'react-redux'
import IntlMessages from '../../components/utility/intlMessages'
import { getRandomArbitrary } from '../../helpers/utility'
import TickerWrapper from './Ticker.style.js'

class HyperionTicker extends Component {

  render() {
    const { tokens_issued, investors, raisedAmount } = this.props
    let limited = raisedAmount < 11000000? getRandomArbitrary(11020000, 11020500) : raisedAmount
    return (
      <TickerWrapper>
        <div className="raise-title">
          <IntlMessages id="hyperion.tickerinfo" />
        </div>
        <div className="raise-number">
         {limited.toLocaleString('en', { style: 'currency', currency: 'USD' })}
        </div>
        <div className="raise-title">
          <IntlMessages id="hyperion.numinvestors" />
        </div>
        <div className="raise-number">
         {investors}
        </div>
        <div className="raise-title">
          <IntlMessages id="hyperion.numtokens" />
        </div>
        <div className="raise-number">
         {tokens_issued.toLocaleString()}
        </div>
      </TickerWrapper>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    raisedAmount: state.Invest.get('hyperion').value? state.Invest.get('hyperion').value : 0,
    investors: state.Invest.get('hyperion').investors? state.Invest.get('hyperion').investors: 0,
    tokens_issued: state.Invest.get('hyperion').tokens_issued? state.Invest.get('hyperion').tokens_issued : 0,
  })
)(HyperionTicker);