const actions = {
  FETCH_FIXTURES: 'FETCH_FIXTURES',
  SET_FIXTURES: 'SET_FIXTURES',

  FETCH_BUSINESS_FIXTURES: 'FETCH_BUSINESS_FIXTURES',
  SET_BUSINESS_FIXTURES: 'SET_BUSINESS_FIXTURES',

  UPDATE_BUSINESS_FIXTURE: 'UPDATE_BUSINESS_FIXTURE', //trigger PATCH request

  ADD_OR_UPDATE_BUSINESS_FIXTURE: 'ADD_OR_UPDATE_BUSINESS_FIXTURE', //in redux store
  
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
  }),

  addOrUpdateBusinessFixture: (businessFixture) => ({
    type: actions.ADD_OR_UPDATE_BUSINESS_FIXTURE,
    businessFixture
  }),

  updateBusinessFixture: (businessFixtureId, updatedFields) => ({
    type: actions.UPDATE_BUSINESS_FIXTURE,
    businessFixtureId,
    updatedFields
  })
};
export default actions;
