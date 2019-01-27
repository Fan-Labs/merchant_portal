import React from 'react'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import hitLogo from '../../image/exchanges/hitbtc.png'
import ExchangeCard from '../FundWidgets/ExchangeCard'
import FundSummary from '../../models/Fund/Summary'
import FundMovement from '../FundWidgets/FundMovement'
import FundValue from '../FundWidgets/FundValue'
import TokenValue from '../FundWidgets/TokenValue'
import TokenSupply from '../FundWidgets/TokenSupply'
import FundChart from '../FundWidgets/FundChart'
import FundHoldings from '../FundWidgets/FundHoldings'

const Overview = (props) => {
  return(
    <LayoutContentWrapper>
      <LayoutContent>
        <ExchangeCard exchangeLogo={hitLogo} exchangeName="HitBTC" exchangeUrl="https://hitbtc.com/?ref_id=5a43d911e5745" />
        <br />
        <FundMovement fund={props.fund} />
        <br />
        <FundValue fund={props.fund} />
        <br />
        <TokenValue fund={props.fund} />
        <br />
        <TokenSupply fund={props.fund} />
        <br />
        <FundChart fund={props.fund} />
        <br />
        <FundHoldings fund={props.fund} />
      </LayoutContent>
    </LayoutContentWrapper>
  )
}

export default FundSummary(Overview)