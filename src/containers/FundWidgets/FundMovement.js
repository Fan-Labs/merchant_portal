import React from 'react'
import { connect } from 'react-redux'
import IntlMessages from '../../components/utility/intlMessages'
import Wrapper from './WidgetStyles.style'

const renderMovement = (percentage, timeUnit) => {
  const isDown = percentage < 0
  return (
    <div className="mv-item">
      <span className="percentage">{percentage}%&nbsp;</span>
      {isDown? (
          <span className="time-unit negative">
            <div>{timeUnit}</div>
            <i className="ion-android-arrow-dropdown" />
          </span>
        ) : (
          <span className="time-unit positive">
            <i className="ion-android-arrow-dropup" />
            <div>{timeUnit}</div>
          </span>
      )}
    </div>
  )
}

const FundMovement = ({fund, hour, day, week }) => (
  <Wrapper>
    <div className="header">
      <IntlMessages id="performance.movement" values= {{fund}} />
    </div>
    <div className="row">
      {renderMovement(hour, "1hr")}
      {renderMovement(day, "24hr")}
      {renderMovement(week, "1w")}
    </div>
  </Wrapper>
)

function mapStateToProps(state, ownProps) {
  const fund = ownProps.fund
  const movements = state.Funds.getIn(['funds', fund])? state.Funds.getIn(['funds', fund]).price_movements : {hour: 0, day: 0, week: 0}
  return {
    ...movements
  }
}

export default connect(mapStateToProps)(FundMovement);

