import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table } from 'antd'
import moment from 'moment'
import IntlMessages from '../utility/intlMessages'
import fundActions from '../../redux/funds/actions'
import Wrapper from './balances.style'

const { fetchFundTransactions } = fundActions

const columns = [{
  title: 'Date',
  dataIndex: 'created_at',
  key: 'created_at',
},{
  title: 'Amount',
  dataIndex: 'amount',
  key: 'Amount',
}, {
  title: 'Tokens Issued',
  dataIndex: 'tokens',
  key: 'Tokens',
}, {
  title: 'Currency',
  dataIndex: 'currency',
  key: 'Currency',
}, {
  title: 'Exchange Rate',
  dataIndex: 'exchange_rate',
  key: 'Exchange Rate',
}, {
  title: 'Token Price',
  dataIndex: 'price',
  key: 'Price',
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'Status',
},{
  title: 'Transaction Hash',
  dataIndex: 'hash',
  key: 'Transaction Hash',
  className: 'transaction-hash'
},
/*{
   title: 'Date',
   dataIndex: 'date',
   key: 'Date',
}*/
]

class Transactions extends Component {
  componentDidMount() {
    this.props.fetchFundTransactions(this.props.fund)
  }

  formatTransactions(transactions) {
    try {
      // very hacky function
      // converts null values to dashes
      // rounds numbers to 3 decimal places
      if (transactions && transactions.length > 0) {
        let copy = [];
        transactions.forEach(transaction => {
          let copied_transaction = Object.assign({}, transaction);
          Object.keys(copied_transaction).forEach(key => {
              if(key==='created_at') {
                copied_transaction[key] = moment(copied_transaction[key]).format('DD/MM/YYYY HH:MM')
              }
              else if(copied_transaction[key] === null) {
                  copied_transaction[key] = '-';
              } else if (!isNaN(parseFloat(copied_transaction[key])) && isFinite(copied_transaction[key]) && key !== 'hash') {
                  copied_transaction[key] = +copied_transaction[key].toFixed(5);
              }
          })
          copy.push(copied_transaction);
        })

        return copy;
      }
      return transactions;
    }
    catch (err) {
      return transactions;
    }
  }

  render() {
    const { fund, transactions, transactionTextKey } = this.props;
    const formattedTransactions = this.formatTransactions(transactions)
    return (
      <Wrapper>
        <div className="page-subtitle">
          <IntlMessages id="history.tableTitleTransactions"
            values={{
              fund,
            }}
          />
        </div>
          {transactionTextKey && (
            <div className="page-subtext">
              <IntlMessages id={transactionTextKey} />
            </div>
          )}
        <div className="table-wrapper">
          <Table rowClassName="transaction-row" size="middle" dataSource={formattedTransactions} columns={columns} />
        </div>
      </Wrapper>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    isLoading: state.App.get('isLoading'),
    transactions: state.Funds.get(ownProps.fund+'_transactions'),
  }),
  { fetchFundTransactions }
)(Transactions);
