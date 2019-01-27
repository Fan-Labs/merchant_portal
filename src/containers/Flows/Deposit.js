import React from 'react'
import { Card } from 'antd';
import IntlMessages from '../../components/utility/intlMessages'
import DepositWrapper, { CardImage } from './Deposit.style.js'
import { currencies } from '../../constants'
import DepositModel from '../../models/Invest/Deposit'

const { Meta } = Card

const Deposit = ({ setCurrency, selectedCurrency, isLoading, select }) => (
  <DepositWrapper>
    <div className="info">
      <IntlMessages id="hyperion.investlimit" />
    </div>
    <div className="title">Choose your deposit currency</div>
    <div className="grid">
      {currencies.map((currency, i) => {
        return (
          <Card
            hoverable={true}
            onClick={()=> select(currency.name)}
            key={i}
            style={{width: '100%', height: '100%'}}
            cover={<CardImage imgUrl={currency.imageUrl} />}
          >
          <Meta
            style={{textAlign: 'center'}}
            title={currency.name}
          />
          </Card>
        )
      })}
    </div>
  </DepositWrapper>
)

export default DepositModel(Deposit)