const actions = {
  SET_CURRENCY: 'SET_CURRENCY',
  RETRIEVE_ADDRESS: 'RETRIEVE_ADDRESS',
  SET_ADDRESS: 'SET_ADDRESS,',
  POLL_ADDRESS: 'POLL_ADDRESS',
  SET_CONFIRMATION: 'SET_CONFIRMATION',
  SET_INVEST_STEP: 'SET_INVEST_STEP',
  SET_C20_MESSAGE: 'SET_C20_MESSAGE',
  SET_KYC_STEP: 'SET_KYC_STEP',
  GET_RATES: 'GET_RATES',
  SET_RATES: 'SET_RATES',
  CHECK_CAP: 'CHECK_CAP',
  RECALCULATE_ICO_STATUS: 'RECALCULATE_ICO_STATUS',
  setCurrency: (currency) => ({
    type: actions.SET_CURRENCY,
    currency,
  }),
  setC20Message: (message) => ({
    type: actions.SET_C20_MESSAGE,
    message,
  }),
  retrieveAddress: (currency, fund) => ({
    type: actions.RETRIEVE_ADDRESS,
    currency,
    fund,
  }),
  setAddress: (address) => ({
    type: actions.SET_ADDRESS,
    address,
  }),
  pollForConfirmation: (fund) => ({
    type: actions.POLL_ADDRESS,
    fund,
  }),
  checkForCapReached: (fund) => ({
    type: actions.CHECK_CAP,
    fund,
  }),
  setConfirmation: (confirmed) => ({
    type: actions.SET_CONFIRMATION,
    confirmed,
  }),
  setInvestStep: (step) => ({
    type: actions.SET_INVEST_STEP,
    step,
  }),
  setKYCStep: (step) => ({
    type: actions.SET_KYC_STEP,
    step,
  }),
  getRates: (fundName) => ({
    type: actions.GET_RATES,
    fundName
  }),
  setRates: (ratesInfo) => ({
    type: actions.SET_RATES,
    ratesInfo,
  }),
  recalculateStatus: () => ({
    type: actions.RECALCULATE_ICO_STATUS,
  })
};

export default actions;
