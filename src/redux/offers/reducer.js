import { Map } from 'immutable';
import actions from './actions';
import { getIndexByProperty } from '../../helpers/utility'

const initState = new Map({
  offers: [],
});

export default function offersReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_OFFERS:
      return state.set('offers', action.offers)
    default:
      return state;
  }
  return state;
}
