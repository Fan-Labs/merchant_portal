const actions = {
  FETCH_TEAMS: 'FETCH_TEAMS',
  SET_TEAMS: 'SET_TEAMS',
  ADD_OR_UPDATE_TEAM: 'ADD_OR_UPDATE_TEAM',
  FETCH_TEAM: 'FETCH_TEAM',
  
  fetchTeams: () => ({
    type: actions.FETCH_TEAMS,
  }),

  fetchTeam: (id) => ({
    type: actions.FETCH_TEAM,
    id,
  }),

  setTeams: (teams) => ({
    type: actions.SET_TEAMS,
    teams
  }),

  addOrUpdateTeam: (team) => ({
    type: actions.ADD_OR_UPDATE_TEAM,
    team
  })
};
export default actions;
