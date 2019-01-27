import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';

import { LOCATION_CHANGE } from 'react-router-redux'
import investActions from './invest/actions'

const { SET_CONFIRMATION } = investActions

// Sorry for atrocious code
const pageview = function (action, prevState, nextState) {
  var event = {
    hitType: 'pageview',
    page: action.payload.pathname,
  };
  let userIdValue = prevState.Auth.get("user").id;
  if (userIdValue !== 1) {
    event.user = {
      userId: userIdValue
    }
  }
  return event;
  };

const transactionDetected = (action, prevState, nextState) => {
    if(action.confirmed) {
    let event = {
      hitType: 'hyperion_deposit',
    }
    let userIdValue = prevState.Auth.get("user").id;
    if (userIdValue !== 1) {
      event.user = {
        userId: userIdValue
      }
    }
    return event;
  } else {
    return null
  }
};

// const eventsMap = {
//   [LOCATION_CHANGE]: pageview,
//   [SET_CONFIRMATION]: transactionDetected,
// };

// const gtm = GoogleTagManager();

// const gtmMiddleware = createMiddleware(eventsMap, gtm);

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];

let store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
)
let persistor = persistStore(store)
sagaMiddleware.run(rootSaga);
export { store, history, persistor };
