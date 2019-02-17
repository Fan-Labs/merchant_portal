import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  businesses: [],
  selectedBusiness: null,
  placesAPIResult: null,
});

export default function businessReducer(state = initState, action) {
  switch (action.type) {
    case actions.FETCH_USER_BUSINESSES:
      return state;
    case actions.SET_BUSINESSES:
      return state.set('businesses', action.businesses)
    case actions.SET_PLACES_API_BUSINESS:
      return state.set('placesAPIResult', action.place)
    default:
      return state;
  }
  return state;
}
