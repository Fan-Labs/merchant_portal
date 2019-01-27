import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import IntlMessages from '../../components/utility/intlMessages'
import Wrapper from './FundCapped.style.js'
import { captureEvent } from '../../helpers/utility'
import logo from '../../image/funds/noia-logo.svg'

//captureEvent("Invest", "Hyperion Transaction", `User: ${userId}`)

class FundCapped extends Component {

  render() {
    const { fund, investors, raisedAmount, direction, tokensIssued } = this.props
    return (
      <Wrapper logo={logo} direction={direction}>
        <div className="image" />

          <div className="rowish">
            <div className="title">
              Hyperion Fund makes its first investment
            </div>
          </div>
          <div className="rowish">
             <a  href="https://cdn.invictuscapital.com/reports/investments/hyperion/noia.pdf" target="_blank" onClick={()=> captureEvent("Hyperion", "download NOIA report", "download NOIA report")}>
               Download the NOIA report
             </a>
          </div>

      </Wrapper>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    investors: state.Invest.get(ownProps.fund).investors? state.Invest.get(ownProps.fund).investors : 0,
    hardcap: state.Invest.get(ownProps.fund).usd_hardcap? state.Invest.get(ownProps.fund).usd_hardcap : 0 ,
    raisedAmount: state.Invest.get(ownProps.fund).value? state.Invest.get('hyperion').value : 0,
    tokensIssued: state.Invest.get(ownProps.fund).tokens_issued? state.Invest.get(ownProps.fund).tokens_issued: 0,
  })
)(FundCapped);