import { Map } from 'immutable';
import actions from './actions';
import { getIndexByProperty } from '../../helpers/utility'

const initState = new Map({
  isDateDrawerOpen: false,
  calendarFilters: {
    calendarMode: 'month',
    selectedDate: null,
  }
});

export default function teamsReducer(state = initState, action) {
  switch (action.type) {
    case actions.TOGGLE_DATE_DRAWER:
      return state.set('isDateDrawerOpen', action.isOpen)
    case actions.SET_CALENDAR_FILTERS:
      return state.set('calendarFilters', action.filters)
    default:
      return state;
  }
  return state;
}
