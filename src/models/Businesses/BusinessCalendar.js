import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import queryString from 'query-string'
import appActions from '../../redux/app/actions'
import UIActions from '../../redux/ui/actions'
import fixtureActions from '../../redux/fixtures/actions'

const { setCalendarFilters, setDateDrawer } = UIActions

function mapStateToProps(state, ownprops) {
  return {
    currentBusinessFixtures: state.Fixtures.get('currentBusinessFixtures'),
    calendarFilters: state.UI.get('calendarFilters'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCalendarFilters,
    setDateDrawer
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.onPanelChange = this.onPanelChange.bind(this)
      this.onDateSelect = this.onDateSelect.bind(this)
    }


    onDateSelect(date) {
      console.log(date.format())
      const {setCalendarFilters, calendarFilters, setDateDrawer} = this.props
      const filters = {
        ...calendarFilters,
        selectedDate: date.format()
      }
      setDateDrawer(true)
      setCalendarFilters(filters)
    }

    onPanelChange(date, mode) {
      const {setCalendarFilters, calendarFilters, setDateDrawer} = this.props
       const filters = {
        ...calendarFilters,
        calendarMode: mode
      }
      //setDateDrawer(false)
      setCalendarFilters(filters)
    }


    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          onDateSelect={this.onDateSelect}
          onPanelChange={this.onPanelChange}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;
