import { fromJS } from 'immutable'
import actions from './actions'

const initState = fromJS({
  hyperion_withdrawals: null,
  hyperion_balances: null,
  hyperion_transactions: null,
  crypto20_withdrawals: null,
  crypto20_balances: null,
  crypto20_transactions: null,
  token_claim_result: null,
  funds: {},
  charts: {},
  holdings: {},
});

export default function fundReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_FUND_WITHDRAWALS:
      return state.set(action.fund+'_withdrawals', action.data)
    case actions.SET_FUND_BALANCES:
      return state.set(action.fund+'_balances', action.data)
    case actions.SET_FUND_TRANSACTIONS:
      return state.set(action.fund+'_transactions', action.data)
    case actions.SET_TOKEN_CLAIM_RESULT:
      return state.set('token_claim_result', action.result)
    case actions.SET_FUND_SUMMARY:
      return state.setIn(['funds', action.fundData.name], action.fundData)
    case actions.SET_FUND_CHART:
      return state.setIn(['charts', action.fundData.name], action.fundData)
    case actions.SET_FUND_HOLDINGS:
      return state.setIn(['holdings', action.holdingsData.name], action.holdingsData)
    default:
      return state;
  }
}
