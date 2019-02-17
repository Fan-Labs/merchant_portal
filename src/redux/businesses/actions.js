const actions = {
  FETCH_USER_BUSINESSES: 'FETCH_USER_BUSINESSES',
  SET_BUSINESSES: 'SET_BUSINESSES',
  SET_PLACES_API_BUSINESS: 'SET_PLACES_API_BUSINESS',
  
  fetchUserBusinesses: () => ({
    type: actions.FETCH_USER_BUSINESSES,
  }),

  setBusinesses: (businesses) => ({
    type: actions.SET_BUSINESSES,
    businesses
  }),

  setPlacesAPIBusiness: (place) => ({
    type: actions.SET_PLACES_API_BUSINESS,
    place
  })
};
export default actions;
