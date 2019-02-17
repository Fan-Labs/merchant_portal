import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects'
import { change } from 'redux-form'
import { MESSAGE_KEYS } from '../../constants'
import { handleError } from '../auth/saga'
import appActions from '../app/actions'
import actions from './actions'
import {
  fetchBusinesses,
} from '../../helpers/api'


const { fetch_business_error } = MESSAGE_KEYS
export function* fetchBusinessesWatcher() {
  yield takeEvery(actions.FETCH_USER_BUSINESSES, function*() {

        try {
        yield put(appActions.startAsync())
        const req = yield call(fetchBusinesses)
        
        yield put(actions.setBusinesses(req.data.data))
        yield put(appActions.endAsync())
        
      } catch(error) {
        yield handleError(error, fetch_business_error)
      }

  });
}

//use the data from google places to set business form fields
export function* setFieldsFromGooglePlaces() {
  yield takeEvery(actions.SET_PLACES_API_BUSINESS, function*({place}) {
        try {
        const { gmaps: {
            international_phone_number,
            name,
            formatted_address,
            icon,
            rating,
            website,
            types
          },
          location: { lat, lng }
        } = place;
        if(international_phone_number) yield put(change('NewBusiness', 'phoneNumber', international_phone_number))
        if(types.includes('establishment') && name) yield put(change('NewBusiness', 'name', name))
        if(formatted_address) yield put(change('NewBusiness', 'address', formatted_address))
        if(website) yield put(change('NewBusiness', 'website', website))
        if(lat) yield put(change('NewBusiness', 'latitude', lat))
        if(lat) yield put(change('NewBusiness', 'longitude', lng))
        
      } catch(error) {
        yield handleError(error, fetch_business_error)
      }

  });
}



export default function* rootSaga() {
  yield all([
    fork(fetchBusinessesWatcher),
    fork(setFieldsFromGooglePlaces)
  ]);
}