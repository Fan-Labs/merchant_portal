import React from 'react'
import { Alert } from 'antd'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import FundHistory from '../../components/fundHistory/fundHistory'
import IntlMessages from '../../components/utility/intlMessages'
import HistoryModel from '../../models/Fund/History'

const History = ({ match, tokenClaimResult }) => (
  <LayoutContentWrapper style={{ height: '100%' }}>
    <LayoutContent>
      {tokenClaimResult && (
          <Alert message={<IntlMessages id="claim.token_claim_success" />} type="success" showIcon />
      )}
      <Alert type="info" message={
          <div className="info-messages">
            <IntlMessages id="fund.claim_wallet_1" /><br/>
            <IntlMessages id="fund.claim_wallet_2" /><br/>
            <IntlMessages id="fund.claim_wallet_3" /><br/>
            <IntlMessages id="fund.claim_wallet_4" /><br/>
          </div>
        }
      />
      <br/>
      <FundHistory fund="Gamedex"
        textKey="history.note"
        additionalTextKey={`history.${match.params.fund}.add_text`}
        transactionTextKey={`history.${match.params.fund}.transaction_text`}
        disimbursementTextKey={`history.${match.params.fund}.disimbursement`}
      />
    </LayoutContent>
  </LayoutContentWrapper>
)

export default HistoryModel(History)