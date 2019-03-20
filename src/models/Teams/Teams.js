import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import appActions from '../../redux/app/actions'
import teamActions from '../../redux/teams/actions'

const { fetchTeams } = teamActions

function mapStateToProps(state, ownprops) {
  return {
    teams: state.Teams.get('teams'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTeams
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(values) {
      console.log(values)
    }

    componentDidMount() {
      if(this.props.teams.length === 0){
        this.props.fetchTeams() 
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
