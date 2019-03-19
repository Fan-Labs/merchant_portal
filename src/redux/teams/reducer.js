import { Map } from 'immutable';
import actions from './actions';
import { getIndexByProperty } from '../../helpers/utility'

const initState = new Map({
  teams: [],
});

export default function teamsReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_TEAMS:
      return state.set('teams', action.teams)
    case actions.ADD_OR_UPDATE_TEAM:
      const teams = state.get('teams')
      const matchingBusIndex = getIndexByProperty(teams, 'id', action.team.id)
      if(matchingBusIndex > -1) {
          teams[matchingBusIndex] = action.team;
      } else {
          teams.push(action.team);
      }
      return state.set('teams', teams)
    default:
      return state;
  }
  return state;
}
