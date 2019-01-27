import React from 'react'
import { connect } from 'react-redux'
import IntlMessages from '../../components/utility/intlMessages'
import Wrapper from './WidgetStyles.style'

const TokenSupply = ({fund, circulating_supply, total_supply }) => (
  <Wrapper>
    <div className="header">
      <IntlMessages id="performance.token_supply" values= {{fund}} />
    </div>
    <div className="subheader">
      <IntlMessages id="performance.circulating_supply" values= {{fund}} />
    </div>
    <div className="row">
      {circulating_supply}
    </div>
    <div className="subheader">
      <IntlMessages id="performance.total_supply" values= {{fund}} />
    </div>
    <div className="row">
      {total_supply}
    </div>
  </Wrapper>
)

function mapStateToProps(state, ownProps) {
  const fund = ownProps.fund
  return {
    circulating_supply: state.Funds.getIn(['funds', fund])? state.Funds.getIn(['funds', fund]).circulating_supply : 0,
    total_supply: state.Funds.getIn(['funds', fund])? state.Funds.getIn(['funds', fund]).total_supply : 0
  }
}

export default connect(mapStateToProps)(TokenSupply);

