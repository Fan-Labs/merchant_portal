import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { MESSAGE_KEYS } from '../../constants'
import appActions from '../app/actions'
import actions from './actions';
import { handleError } from '../auth/saga'

const {get_transactions_fails} = MESSAGE_KEYS
export function* fetchTransactionsWatcher() {
  yield takeEvery(actions.FETCH_FUND_TRANSACTIONS, function*({fund}) {
    
  });
}

const {get_withdrawals_fails} = MESSAGE_KEYS
export function* fetchWithdrawalsWatcher() {
  yield takeEvery(actions.FETCH_FUND_WITHDRAWALS, function*({fund}) {
    
  });
}

const {get_balances_fails} = MESSAGE_KEYS
export function* fetchBalancesWatcher() {
  yield takeEvery(actions.FETCH_FUND_BALANCES, function*({fund}) {
    
  });
}

const {submit_claim_error} = MESSAGE_KEYS
export function* claimTokensWatcher() {
  yield takeEvery(actions.SUBMIT_TOKEN_CLAIM, function*({fund, amount, address, password}) {
   
  });
}


//TODO - Add error keys to these error handlers

// export function* fetchFunds() {
//   yield takeEvery(actions.FETCH_FUNDS, function*() {
//     try {
//       yield put(appActions.startAsync())
//       const req = yield call(fetchBalances, fund)
//       yield put(actions.setFundBalances(fund, req.data.balance))
//       yield put(appActions.endAsync())
//     } catch(error) {
//       yield handleError(error, get_balances_fails)
//     }
//   });
// }

export function* fetchFundSummaryWatcher() {
  yield takeEvery(actions.FETCH_FUND_SUMMARY, function*({fund}) {
    
  });
}

export function* fetchFundChartWatcher() {
  yield takeEvery(actions.FETCH_FUND_CHART, function*({fund, start, end, granularity}) {
   
  });
}

export function* fetchFundHoldingsWatcher() {
  yield takeEvery(actions.FETCH_FUND_HOLDINGS, function*({fund}) {
   
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchTransactionsWatcher),
    fork(fetchWithdrawalsWatcher),
    fork(fetchBalancesWatcher),
    fork(claimTokensWatcher),
    fork(fetchFundSummaryWatcher),
    fork(fetchFundChartWatcher),
    fork(fetchFundHoldingsWatcher)
  ]);
}
