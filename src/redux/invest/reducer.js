import { Map } from 'immutable'
import moment from 'moment'
import { ico_close_date } from '../../constants/index'
import actions from './actions'

const initState = new Map({
  selectedCurrency: null,
  c20Message: null,
  investAddress: null,
  rates: null,
  transactionConfirmed: false,
  investStep: 0,
  kycStep: 0,
  icoClosed: moment(ico_close_date).isBefore(moment()),
  hyperion: { open: false, cap_reached: false },
});

export default function investReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_CURRENCY:
      return state.set('selectedCurrency', action.currency)
    case actions.SET_ADDRESS:
      return state.set('investAddress', action.address)
    case actions.SET_CONFIRMATION:
      return state.set('transactionConfirmed', action.confirmed)
    case actions.SET_INVEST_STEP:
      const current = state.get('investStep')
      if(Number.isInteger(action.step)) {
        if(action.step===-1){
          return state.set('investStep', state.get('investStep')-1)
        } else {
          return state.set('investStep', action.step)
        }
      } else {
        return state.set('investStep', state.get('investStep') + 1)
      }
    case actions.SET_KYC_STEP:
      return state.set('kycStep', action.step)
    case actions.SET_C20_MESSAGE:
      return state.set('c20Message', action.message)
    case actions.SET_RATES:
      return state.set(action.ratesInfo.name, action.ratesInfo)
    case actions.RECALCULATE_ICO_STATUS:
      return state.set('icoClosed', moment(ico_close_date).isBefore(moment()))
    default:
      return state;
  }
}