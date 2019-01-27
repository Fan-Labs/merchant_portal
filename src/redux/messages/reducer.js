import { Map } from 'immutable';
import actions from './actions';


const initState = new Map({
});

export default function messagesReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_MESSAGE:
      return state.clear().set(action.key, action.message);
    case actions.CLEAR_ALL:
      return state.clear()
    default:
      return state;
  }
}
