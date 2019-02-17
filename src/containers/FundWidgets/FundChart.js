import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from 'chart.js';
import {bindActionCreators} from 'redux'




function mapStateToProps(state, ownProps) {
  const fund = ownProps.fund
  return {
    fund,
    chart: state.Funds.getIn(['charts', fund]),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}


class FundChart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chartElement: null
    }
  }

  componentDidMount() {
    const { fund } = this.props

    const ctx = document.getElementById('fundSummary').getContext('2d')
    this.setState({chartElement: ctx})
  }

  componentDidUpdate(prevProps) {
    const { fund, chart: {chart, labels} } = this.props
    const { chartElement } = this.state
    if(this.props.chart !== prevProps.chart) {
      const cfg = {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: `${fund} performance`,
            data: chart,
            type: 'line',
            pointRadius: 2,
            fill: true,
            lineTension: 0,
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'series',
              ticks: {
                source: 'auto'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Closing price ($)'
              }
            }]
          }
        }
      }
      new Chart(chartElement, cfg)
    }
  }

  render() {
    return (
      <div className="chart-container" style={{position: 'relative', height: '100%', width: '50%'}}>
        <canvas id="fundSummary"></canvas>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FundChart);
