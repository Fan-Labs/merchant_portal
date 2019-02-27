import { Map } from 'immutable';
import actions from './actions';
import { getIndexByProperty } from '../../helpers/utility'

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
    case actions.SET_PLACE_API_PHOTOS:
      const business = state.get('placesAPIResult')
      return state.set('placesAPIResult', {
        ...business,
        photos: action.photoUrls
      })
    case actions.ADD_OR_UPDATE_BUSINESS:
      const businesses = state.get('businesses')
      const matchingBusIndex = getIndexByProperty(businesses, 'id', action.business.id)
      if(matchingBusIndex > -1) {
          businesses[matchingBusIndex] = action.business;
      } else {
          businesses.push(action.business);
      }
      return state.set('businesses', businesses)
    default:
      return state;
  }
  return state;
}
