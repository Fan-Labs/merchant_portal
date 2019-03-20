import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import appActions from '../../redux/app/actions'
import fixturesActions from '../../redux/fixtures/actions'

const { fetchFixtures } = fixturesActions

function mapStateToProps(state, ownprops) {
  return {
    fixtures: state.Feams.get('fixtures'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFixtures
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
     this.props.fetchFixtures() 
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
