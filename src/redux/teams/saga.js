import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { MESSAGE_KEYS } from '../../constants'
import { handleError } from '../auth/saga'
import appActions from '../app/actions'
import actions from './actions'
import {
  fetchTeams,
  fetchTeam,
} from '../../helpers/api'
import { notification } from 'antd'


const { fetch_business_error } = MESSAGE_KEYS
export function* fetchTeamsWatcher() {
  yield takeEvery(actions.FETCH_TEAMS, function*() {

        try {
        yield put(appActions.startAsync())
        const req = yield call(fetchTeams)
        
        yield put(actions.setTeams(req.data.data))
        yield put(appActions.endAsync())
        
      } catch(error) {
        yield handleError(error, fetch_business_error)
      }

  });
}

export function* fetchTeamWatcher() {
  yield takeEvery(actions.FETCH_TEAM, function*({id}) {
        try {
        yield put(appActions.startAsync())
        debugger
        const req = yield call(fetchTeam, id)
        debugger
        yield put(actions.addOrUpdateTeam(req.data))
        yield put(appActions.endAsync())
        
      } catch(error) {
        yield handleError(error, fetch_business_error)
      }

  });
}




export default function* rootSaga() {
  yield all([
    fork(fetchTeamsWatcher),
    fork(fetchTeamWatcher),
  ]);
}