import React from 'react'
import { connect } from 'react-redux'
import IntlMessages from '../../components/utility/intlMessages'
import Wrapper from './WidgetStyles.style'

const FundValue = ({fund, fund_value }) => (
  <Wrapper>
    <div className="header">
      <IntlMessages id="performance.fund_value" values= {{fund}} />
    </div>
    <div className="row">
      {fund_value.toLocaleString('en', { style: 'currency', currency: 'USD' })}
    </div>
  </Wrapper>
)

function mapStateToProps(state, ownProps) {
  const fund = ownProps.fund
  return {
    fund_value: state.Funds.getIn(['funds', fund])? state.Funds.getIn(['funds', fund]).usd_value : 0
  }
}

export default connect(mapStateToProps)(FundValue);

