import { Map } from 'immutable';
import actions from './actions';
import { getIndexByProperty } from '../../helpers/utility'

const initState = new Map({
  fixtures: [],
  currentBusinessFixtures: [],
  isUpdating: false
});

export default function fixturesReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_FIXTURES:
      return state.set('fixtures', action.fixtures)
    case actions.SET_BUSINESS_FIXTURES:
      return state.set('currentBusinessFixtures', action.businessFixtures)
    case actions.UPDATE_BUSINESS_FIXTURE:
      return state.set('isUpdating', true)
    case actions.ADD_OR_UPDATE_BUSINESS_FIXTURE:
      const businessFixtures = state.get('currentBusinessFixtures')
      const matchingIndex = getIndexByProperty(businessFixtures, 'id', action.businessFixture.id)
      if(matchingIndex > -1) {
          businessFixtures[matchingIndex] = { ...businessFixtures[matchingIndex], ...action.businessFixture}
      } else {
          businessFixtures.push(action.businessFixture);
      }
      return state.set('currentBusinessFixtures', businessFixtures)
                  .set('isUpdating', false)
    default:
      return state;
  }
  return state;
}
