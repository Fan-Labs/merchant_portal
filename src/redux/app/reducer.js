import { Map } from 'immutable';
import { getDefaultPath } from '../../helpers/urlSync';
import actions, { getView } from './actions';

const preKeys = getDefaultPath();

const initState = new Map({
  collapsed: true,
  view: getView(window.innerWidth),
  height: window.innerHeight,
  openDrawer: false,
  openKeys: preKeys,
  current: preKeys,
  isLoading: false,
  lastAPICall: {},
});
export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.COLLPSE_CHANGE:
      return state.set('collapsed', !state.get('collapsed'));
    case actions.COLLPSE_OPEN_DRAWER:
      return state.set('openDrawer', !state.get('openDrawer'));
    case actions.TOGGLE_ALL:
      if (state.get('view') !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return state
          .set('collapsed', action.collapsed)
          .set('view', action.view)
          .set('height', height);
      }
      break;
    case actions.CHANGE_OPEN_KEYS:
      return state.set('openKeys', action.openKeys);
    case actions.CHANGE_CURRENT:
      return state.set('current', action.current);
    case actions.START_ASYNC:
      return state.set('isLoading',true);
    case actions.END_ASYNC:
      return state.set('isLoading',false);
    case actions.SET_LAST_API_CALL:
      return state.set('lastAPICall', action.action)
    default:
      return state;
  }
  return state;
}
