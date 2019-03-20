const actions = {
  FETCH_FIXTURES: 'FETCH_FIXTURES',
  SET_FIXTURES: 'SET_FIXTURES',

  FETCH_BUSINESS_FIXTURES: 'FETCH_BUSINESS_FIXTURES',
  SET_BUSINESS_FIXTURES: 'SET_BUSINESS_FIXTURES',
  
  fetchFixtures: () => ({
    type: actions.FETCH_FIXTURES,
  }),

  setFixtures: (fixtures) => ({
    type: actions.SET_FIXTURES,
    fixtures
  }),

  fetchBusinessFixtures: (businessId) => ({
    type: actions.FETCH_BUSINESS_FIXTURES,
    businessId
  }),

  setBusinessFixtures: (businessFixtures) => ({
    type: actions.SET_BUSINESS_FIXTURES,
    businessFixtures
  })
};
export default actions;
