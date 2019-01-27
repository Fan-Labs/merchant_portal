import React, { Component } from 'react'
import { connect } from 'react-redux'
import IntlMessages from '../utility/intlMessages'
import { Alert } from 'antd'
import Wrapper from './style'
import Withdrawals from './withdrawals'
import Balances from './balances'
import Transactions from './transactions'


class FundHistory extends Component {
  render() {
    const { fund, textKey, additionalTextKey, transactionTextKey, disimbursementTextKey } = this.props;

    return (
      <Wrapper>
        <div className="page-title">
          <IntlMessages id="history.pageTitle"
            values={{
              fund,
            }}
          />
        </div>
        <div className="page-subtitle">
         {additionalTextKey && (
            <IntlMessages id={additionalTextKey} />
          )}
        </div>
        <Alert message={<IntlMessages id="fund.reversals" />} type="info" />
        <div className="page-note">
          <IntlMessages id={textKey} />
        </div>
        <Balances fund={fund} />
        <Transactions fund={fund} transactionTextKey={transactionTextKey}  />
        <Withdrawals fund={fund} disimbursementTextKey={disimbursementTextKey} />
      </Wrapper>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    isLoading: state.App.get('isLoading')
  })
)(FundHistory);
