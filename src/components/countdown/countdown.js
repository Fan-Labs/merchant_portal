import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import withCountdown from './withCountdown'
import Button from '../uielements/button'
import IntlMessages from '../utility/intlMessages'
import VerticalWrapper from './countdown.style.js'
import HyperionTicker from '../../containers/Dashboard/HyperionTicker'

//replace with hyperion ticker when ready

class HyperionCountdown extends Component {
  render() {
    const { 
      logo,
      textKey,
      reachedTextKey,
      monthsRemaining,
      daysRemaining,
      hoursRemaining,
      minutesRemaining,
      direction,
      showButton,
      countdownReached
    } = this.props;
    return (
      <VerticalWrapper logo={logo} direction={direction} width="30%">
        <div className="image" />
        <div className="title">
          {textKey && (<IntlMessages id={countdownReached? reachedTextKey : textKey} />) }
        </div>
        <div className="countdown">
          {countdownReached? (
             <HyperionTicker />       
          ) : (
            <React.Fragment>
              {monthsRemaining && (
                <div className="number">{monthsRemaining} {monthsRemaining>1? "months" : "month"}</div>
              )}
              <div className="number">{daysRemaining} {daysRemaining>1? "days" : "day"}</div>
              <div className="number">{hoursRemaining} {hoursRemaining>1? "hours" : "hour"}</div>
              <div className="number">{minutesRemaining} {minutesRemaining>1? "minutes" : "minute"}</div>
            </React.Fragment>
          )}
        </div>
        {showButton && (
          <Link className="link" to="/app/hyperion/invest">
             <IntlMessages id="countdown.investLink" style={{marginRight: '5px'}} />
         </Link>
        )}
      </VerticalWrapper>
    )
  }
}

export default withCountdown(HyperionCountdown)
