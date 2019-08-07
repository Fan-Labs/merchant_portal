const actions = {
  FETCH_OFFERS: 'FETCH_OFFERS',
  SET_OFFERS: 'SET_OFFERS',
  
  fetchOffers: () => ({
    type: actions.FETCH_OFFERS,
  }),

  setOffers: (offers) => ({
    type: actions.SET_OFFERS,
    offers
  }),
};
export default actions;
