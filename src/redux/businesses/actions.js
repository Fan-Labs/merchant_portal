const actions = {
  FETCH_USER_BUSINESSES: 'FETCH_USER_BUSINESSES',
  SET_BUSINESSES: 'SET_BUSINESSES',
  SET_PLACES_API_BUSINESS: 'SET_PLACES_API_BUSINESS',
  SET_PLACE_API_PHOTOS: 'SET_PLACE_API_PHOTOS',
  SAVE_BUSINESS: 'SAVE_BUSINESS',
  ADD_OR_UPDATE_BUSINESS: 'ADD_OR_UPDATE_BUSINESS',
  
  fetchUserBusinesses: () => ({
    type: actions.FETCH_USER_BUSINESSES,
  }),

  setBusinesses: (businesses) => ({
    type: actions.SET_BUSINESSES,
    businesses
  }),

  addOrUpdateBusiness: (business) => ({
    type: actions.ADD_OR_UPDATE_BUSINESS,
    business
  }),

  setPlacesAPIBusiness: (place) => ({
    type: actions.SET_PLACES_API_BUSINESS,
    place
  }),

  setPlacesAPIPhotos: (photoUrls) => ({
    type: actions.SET_PLACE_API_PHOTOS,
    photoUrls
  }),

  saveBusiness: (values) => ({
    type: actions.SAVE_BUSINESS,
    values
  })
};
export default actions;
