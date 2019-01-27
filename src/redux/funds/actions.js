const actions = {
  FETCH_FUND_WITHDRAWALS: 'FETCH_FUND_WITHDRAWALS',
  FETCH_FUND_BALANCES: 'FETCH_FUND_BALANCES',
  FETCH_FUND_TRANSACTIONS: 'FETCH_FUND_TRANSACTIONS',
  SET_FUND_WITHDRAWALS: 'SET_FUND_WITHDRAWALS',
  SET_FUND_BALANCES: 'SET_FUND_BALANCES',
  SET_FUND_TRANSACTIONS: 'SET_FUND_TRANSACTIONS',
  SUBMIT_TOKEN_CLAIM: 'SUBMIT_TOKEN_CLAIM',
  SET_TOKEN_CLAIM_RESULT: 'SET_TOKEN_CLAIM_RESULT',

  FETCH_FUNDS: 'FETCH_FUNDS',
  FETCH_FUND_SUMMARY: 'FETCH_FUND_SUMMARY',
  SET_FUND_SUMMARY: 'SET_FUND_SUMMARY',
  
  FETCH_FUND_CHART: 'FETCH_FUND_CHART',
  SET_FUND_CHART: 'SET_FUND_CHART',

  FETCH_FUND_HOLDINGS: 'FETCH_FUND_HOLDINGS',
  SET_FUND_HOLDINGS: 'SET_FUND_HOLDINGS',

  fetchFundWithdrawals: (fund) => ({
    type: actions.FETCH_FUND_WITHDRAWALS,
    fund,
  }),
  fetchFundBalances: (fund) => ({
    type: actions.FETCH_FUND_BALANCES,
    fund,
  }),
  fetchFundTransactions: (fund) => ({
    type: actions.FETCH_FUND_TRANSACTIONS,
    fund,
  }),
  setFundWithdrawals: (fund, data) => ({
    type: actions.SET_FUND_WITHDRAWALS,
    fund,
    data,
  }),
  setFundBalances: (fund, data) => ({
    type: actions.SET_FUND_BALANCES,
    fund,
    data,
  }),
  setFundTransactions: (fund, data) => ({
    type: actions.SET_FUND_TRANSACTIONS,
    fund,
    data,
  }),
  submitTokenClaim: (fund, amount, address, password) => ({
    type: actions.SUBMIT_TOKEN_CLAIM,
    fund,
    amount,
    address,
    password,
  }),
  setTokenClaimResult: (result) => ({
    type: actions.SET_TOKEN_CLAIM_RESULT,
    result,
  }),
  fetchFunds: () => ({
    type: actions.FETCH_FUNDS,
  }),
  fetchFundSummary: (fund) => ({
    type: actions.FETCH_FUND_SUMMARY,
    fund,
  }),
  setFundSummary: (fundData) => ({
    type: actions.SET_FUND_SUMMARY,
    fundData,
  }),
  fetchFundChart: (fund, start, end, granularity) => ({
    type: actions.FETCH_FUND_CHART,
    fund,
    start,
    end,
    granularity
  }),
  setFundChart: (fundData) => ({
    type: actions.SET_FUND_CHART,
    fundData,
  }),
  fetchFundHoldings: (fund) => ({
    type: actions.FETCH_FUND_HOLDINGS,
    fund,
  }),
  setFundHoldings: (holdingsData) => ({
    type: actions.SET_FUND_HOLDINGS,
    holdingsData,
  })
};

export default actions;
