import React, { Component } from 'react'
import moment from 'moment'

export default function withCountdown(WrappedComponent) {
  // ...and returns another component...
  class Countdown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        deadline: props.deadline,
        daysRemaining: 0,
        hoursRemaining: 0,
        minutesRemaining: 0,
        secondsRemaining: 0,
        countdownReached: false,
      }
      this.tick = this.tick.bind(this)
    }

    componentDidMount() {
      this.timer = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    tick() {
      const diff = moment(this.state.deadline).diff(moment())
      const duration = moment.duration(diff)
      const daysRemaining = duration.asDays() > -1? parseInt(duration.asDays()) : 0
      const hoursRemaining = duration.hours() > -1? duration.hours() : 0
      const minutesRemaining = duration.minutes() > -1? duration.minutes() : 0
      const secondsRemaining = duration.seconds() > -1? duration.seconds() : 0
      let countdownReached = false
      if(daysRemaining === 0 && hoursRemaining === 0 && minutesRemaining === 0 && secondsRemaining === 0) {
        countdownReached = true
      }

      this.setState({
        ...this.state,
        daysRemaining: duration.asDays() > -1? parseInt(duration.asDays()) : 0,
        hoursRemaining: duration.hours() > -1? duration.hours() : 0,
        minutesRemaining: duration.minutes() > -1? duration.minutes() : 0,
        secondsRemaining: duration.seconds() > -1? duration.seconds() : 0,
        countdownReached,   
      })
    }

    render() {
      return <WrappedComponent  {...this.props} {...this.state}/>;
    }
  };

  return Countdown
}
