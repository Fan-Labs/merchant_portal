import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from 'chart.js';
import {bindActionCreators} from 'redux'
import fundActions from '../../redux/funds/actions'

const { fetchFundHoldings } = fundActions


function mapStateToProps(state, ownProps) {
  const fund = ownProps.fund
  return {
    fund,
    holdings: state.Funds.getIn(['holdings', fund]),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFundHoldings
  }, dispatch);
}


class FundHoldings extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chartElement: null
    }
  }

  componentDidMount() {
    const { fund } = this.props
    this.props.fetchFundHoldings(fund)
    const ctx = document.getElementById('fundHoldings').getContext('2d')
    this.setState({chartElement: ctx})
  }

  componentDidUpdate(prevProps) {
    const { holdings: {holdings, labels} } = this.props
    const { chartElement } = this.state
    if(this.props.holdings !== prevProps.holdings) {
      const cfg = {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: holdings.map(obj => obj.percentage),
          }]
        },
      }
      new Chart(chartElement, cfg)
    }
  }

  render() {
    return (
      <div className="chart-container" style={{position: 'relative', height: '100%', width: '50%'}}>
        <canvas id="fundHoldings"></canvas>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FundHoldings);
