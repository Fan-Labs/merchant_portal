import React from 'react'
import { connect } from 'react-redux'
import IntlMessages from '../../components/utility/intlMessages'
import Wrapper from './WidgetStyles.style'

const TokenValue = ({fund, token_value }) => (
  <Wrapper>
    <div className="header">
      <IntlMessages id="performance.token_value" values= {{fund}} />
    </div>
    <div className="row">
      {token_value.toLocaleString('en', { style: 'currency', currency: 'USD' })}
    </div>
  </Wrapper>
)

function mapStateToProps(state, ownProps) {
  const fund = ownProps.fund
  return {
    token_value: state.Funds.getIn(['funds', fund])? state.Funds.getIn(['funds', fund]).nav_per_token : 0
  }
}

export default connect(mapStateToProps)(TokenValue);

