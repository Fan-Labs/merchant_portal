import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects'
import { change } from 'redux-form'
import { MESSAGE_KEYS } from '../../constants'
import { handleError } from '../auth/saga'
import appActions from '../app/actions'
import actions from './actions'
import {
  fetchBusinesses,
  fetchBusiness,
  saveBusiness,
} from '../../helpers/api'
import { notification } from 'antd'


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

export function* fetchBusinessWatcher() {
  yield takeEvery(actions.FETCH_BUSINESS, function*({id}) {
        try {
        yield put(appActions.startAsync())
        debugger
        const req = yield call(fetchBusiness, id)
        debugger
        yield put(actions.addOrUpdateBusiness(req.data))
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
            types,
            photos
          },
          location: { lat, lng }
        } = place;
        if(international_phone_number) yield put(change('NewBusiness', 'phoneNumber', international_phone_number))
        if(types.includes('establishment') && name) yield put(change('NewBusiness', 'name', name))
        if(formatted_address) yield put(change('NewBusiness', 'streetAddress', formatted_address))
        if(website) yield put(change('NewBusiness', 'website', website))
        if(lat) yield put(change('NewBusiness', 'latitude', lat))
        if(lat) yield put(change('NewBusiness', 'longitude', lng))
        if(photos && photos.length >= 3) {
          const firstImage = yield photos[0].getUrl()
          const secondImage = yield photos[1].getUrl()
          const thirdImage = yield photos[2].getUrl()
          yield put(actions.setPlacesAPIPhotos([firstImage, secondImage, thirdImage]))
        }
        
      } catch(error) {
        yield handleError(error, fetch_business_error)
      }

  });
}

export function* saveBusinessWatcher() {
  yield takeEvery(actions.SAVE_BUSINESS, function*({values}) {
        try {
        yield put(appActions.startAsync())
        //get the google place object to add to the save business request
        const APIPlaceObject = yield select(getAPIPlaceObject)
        const req = yield call(saveBusiness, {
          ...values,
          googlePlace: APIPlaceObject
        })
        yield put(actions.addOrUpdateBusiness(req.data))
        notification.success({
          message: 'Business Saved!',
          placement: 'topRight'
        });
        yield put(appActions.endAsync())
        
      } catch(error) {
        yield handleError(error, fetch_business_error)
      }

  });
}

//State selector
const getAPIPlaceObject = state => state.Businesses.get('placesAPIResult')


export default function* rootSaga() {
  yield all([
    fork(fetchBusinessWatcher),
    fork(fetchBusinessesWatcher),
    fork(setFieldsFromGooglePlaces),
    fork(saveBusinessWatcher)
  ]);
}