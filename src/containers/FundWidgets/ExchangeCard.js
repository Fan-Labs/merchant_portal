import React from 'react'
import {ExchangeCardWrapper} from './WidgetStyles.style'

const ExchangeCard = ({exchangeLogo, exchangeName, exchangeUrl }) => (
  <ExchangeCardWrapper logo={exchangeLogo}>
    <div className="card">
      <div className="header">
        {exchangeName}
      </div>
      <div className="exchange-logo" />
      <a href={exchangeUrl} target="_blank" className="sign-up">Sign up to {exchangeName}</a>
    </div>
  </ExchangeCardWrapper>
)

export default ExchangeCard

