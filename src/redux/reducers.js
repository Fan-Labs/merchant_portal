import Auth from './auth/reducer'
import App from './app/reducer'
import Messages from './messages/reducer'
import Businesses from './businesses/reducer'
import Teams from './teams/reducer'
import Fixtures from './fixtures/reducer'
import LanguageSwitcher from './languageSwitcher/reducer'
import UI from './ui/reducer'
import Offers from './offers/reducer'
import { reducer as formReducer } from 'redux-form'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'portal_forms',
  storage,
}

const persistedReducer = persistReducer(persistConfig, formReducer)


export default {
  Auth,
  App,
  Businesses,
  Teams,
  Fixtures,
  Offers,
  UI,
  Messages,
  LanguageSwitcher,
  form: persistedReducer,
};
