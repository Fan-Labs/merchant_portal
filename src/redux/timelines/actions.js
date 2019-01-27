const actions = {
  FETCH_TIMELINES: 'FETCH_TIMELINES',
  SET_TIMELINES: 'SET_TIMELINES',
  fetchTimelines: () => ({
    type: actions.FETCH_TIMELINES,
  }),
  setTimelines: (timelines) => ({
    type: actions.SET_TIMELINES,
    subscriptions
  }),
};

export default actions;
