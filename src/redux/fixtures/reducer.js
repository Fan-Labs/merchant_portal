import { Map } from 'immutable';
import actions from './actions';
import { getIndexByProperty } from '../../helpers/utility'

const initState = new Map({
  fixtures: [],
  currentBusinessFixtures: []
});

export default function fixturesReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_FIXTURES:
      return state.set('fixtures', action.fixtures)
    case actions.SET_BUSINESS_FIXTURES:
      return state.set('currentBusinessFixtures', action.businessFixtures)
    default:
      return state;
  }
  return state;
}
