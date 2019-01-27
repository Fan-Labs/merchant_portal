import React from 'react'
import { Card, Tooltip, Icon } from 'antd'
import QRCode from 'react-qr-code'
import IntlMessages from '../../components/utility/intlMessages'
import { AddressWrapper } from './Deposit.style.js'
import AddressModel from '../../models/Invest/DepositAddress'

const columns = [
{
  title: 'Token Price (USD)',
  dataIndex: 'rate',
  key: 'rate',
  width: 100,
  fixed: 'right',
},
{
  title: 'BTC Contributions',
  dataIndex: 'btc_contributions',
  key: 'btc_contributions',
},
{
  title: 'ETH Contributions',
  dataIndex: 'eth_contributions',
  key: 'eth_contributions',
},
{
  title: 'Total Investors',
  dataIndex: 'investors',
  key: 'investors',
}, {
  title: 'Tokens Issued',
  dataIndex: 'tokens_issued',
  key: 'tokens_issued',
}, {
  title: 'BTC Rate (USD)',
  dataIndex: 'usd_btc',
  key: 'usd_btc',
}, {
  title: 'ETH Rate (USD)',
  dataIndex: 'usd_eth',
  key: 'usd_eth',
}, {
  title: 'USD Hardcap',
  dataIndex: 'usd_hardcap',
  key: 'usd_hardcap',
}, {
  title: 'USD Softcap',
  dataIndex: 'usd_softcap',
  key: 'usd_softcap',
}
]

const DepositAddress = ({ isLoading, selectedCurrency, investAddress, rates, fund }) => (
  <AddressWrapper>
    <div className="instructions">
      <IntlMessages id="invest.instructions" />
    </div>
    <div className="row">
      <div className="rate-block">
        {columns.map((field, i) => {
          return (
            <React.Fragment>
              <div className="field-header">
                {field.title}
              </div>
              <div className="field-data">
                {rates[field.key]}
              </div>
            </React.Fragment>
          )
        })}
      </div>
      <Card
        loading={isLoading}
        style={{backgroundColor: "#23b4e9", background: "#23b4e9", width: '100%', height: 'fit-content'}}
        title={
            <Tooltip title="Use this address when making your investment in your chosen currency.">
              {`${selectedCurrency} Wallet Address`}
              <Icon type="question-circle"  style={{color: 'white', cursor: 'pointer', marginLeft: '10px'}} />
            </Tooltip>
          }
        >
        <div className="centered">
          <div className="address">{investAddress}</div>
          {investAddress && (
            <QRCode value={investAddress} size={120}  />
          )}
        </div>
      </Card>
    </div>
  </AddressWrapper>
)

export default AddressModel(DepositAddress)