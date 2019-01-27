import { Map } from 'immutable';
import actions from './actions';


const initState = new Map({
  timelines: [],
});

export default function notificationsReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_SUBSCRIPTIONS:
      return state.set('subscriptions', action.subscriptions)
    default:
      return state;
  }
  return state;
}
