import React, { Component } from 'react';
import { connect } from 'react-redux'
import IntlMessages from '../utility/intlMessages'
import fundActions from '../../redux/funds/actions'
import { Table } from 'antd'
import Wrapper from './balances.style'
import moment from 'moment'

const { fetchFundWithdrawals } = fundActions

const columns = [{
    title: <div className="table-title">Date</div>,
    dataIndex: 'created_at',
    key: 'created_at',
  },{
    title: <div className="table-title">Amount</div>,
    dataIndex: 'amount',
    key: 'Amount',
  }, {
    title: <div className="table-title">Currency</div>,
    dataIndex: 'currency',
    key: 'Currency',
  }, {
    title: <div className="table-title">Status</div>,
    dataIndex: 'status',
    key: 'Status',
  },
   {
    title: <div className="table-title">Address</div>,
    dataIndex: 'address',
    key: 'Address',
  }
]

class Transactions extends Component {
  componentDidMount() {
    this.props.fetchFundWithdrawals(this.props.fund)
  }

  formatWithdrawals(withdrawals) {
    try {
      // very hacky function
      // converts null values to dashes
      // rounds numbers to 3 decimal places
      if (withdrawals && withdrawals.length > 0) {
        let copy = [];
        withdrawals.forEach(withdrawal => {
          let copied_withdrawal = Object.assign({}, withdrawal);
          Object.keys(copied_withdrawal).forEach(key => {
              if (key === 'created_at') {
                copied_withdrawal[key] = moment(copied_withdrawal[key]).format('DD/MM/YYYY HH:MM')
              }
              else if (copied_withdrawal[key] === null) {
                  copied_withdrawal[key] = '-';
              } else if (!isNaN(parseFloat(copied_withdrawal[key])) && isFinite(copied_withdrawal[key]) && key !== 'hash') {
                  copied_withdrawal[key] = +copied_withdrawal[key].toFixed(5);
              }
          })
          copy.push(copied_withdrawal);
        })

        return copy;
      }
      return withdrawals;
    }
    catch(err) {
      return withdrawals;
    }

  }

  render() {
    const { fund, withdrawals, disimbursementTextKey } = this.props;
    const formattedWithdrawals = this.formatWithdrawals(withdrawals)
    return (
      <Wrapper>
        <div className="page-subtitle">
          <IntlMessages id="history.tableTitleWithdrawals"
            values={{
              fund,
            }}
          />
        </div>
        <br />
          {disimbursementTextKey && (
            <div className="page-subtext">
              <IntlMessages id={disimbursementTextKey} />
            </div>
          )}
        <div className="table-wrapper">
          <Table rowClassName="transaction-row" dataSource={formattedWithdrawals} columns={columns} size="middle" />
        </div>
      </Wrapper>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    isLoading: state.App.get('isLoading'),
    withdrawals: state.Funds.get(ownProps.fund+'_withdrawals'),
  }),
  { fetchFundWithdrawals }
)(Transactions);
