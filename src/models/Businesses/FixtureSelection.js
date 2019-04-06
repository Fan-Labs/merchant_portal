import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import moment from 'moment'
import appActions from '../../redux/app/actions'
import UIActions from '../../redux/ui/actions'
import fixtureActions from '../../redux/fixtures/actions'

const {updateBusinessFixture} = fixtureActions

//filter the fixtures to display based on calendar mode and date selection
function mapStateToProps(state, ownprops) {
  const {calendarMode, selectedDate} = state.UI.get('calendarFilters')
  const currentBusinessFixtures = state.Fixtures.get('currentBusinessFixtures')
  let filteredFixtures = []
  if(calendarMode === 'month') {
    filteredFixtures = currentBusinessFixtures.filter((item) => 
      moment(item['fixture.startDateTime']).isSame(selectedDate, 'day')
      )
  } else {
    filteredFixtures = currentBusinessFixtures.filter((item) => 
      moment(item['fixture.startDateTime']).isSame(selectedDate, 'month')
      )
  }
  return {
    filteredFixtures,
    calendarMode,
    selectedDate
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateBusinessFixture,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.toggleFixtureActivation = this.toggleFixtureActivation.bind(this)
    }


    toggleFixtureActivation(businessFixtureId, isActive) {
      console.log(isActive)
      this.props.updateBusinessFixture(businessFixtureId, {isActive})
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          toggleFixtureActivation={this.toggleFixtureActivation}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
