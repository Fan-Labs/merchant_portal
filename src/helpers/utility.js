import request from 'axios'
//import ReactGA from 'react-ga'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import fomoClient from '../config/useFomo'

export function clearToken() {
  localStorage.removeItem('id_token');
}

export function getValidToken() {
  try {
    const token = localStorage.getItem('id_token')
    const decoded = jwt_decode(token)
    setUser(decoded.user)
    if (moment().isAfter(moment.unix(decoded.exp))) {
      clearToken()
      return null
    }
    return token
  } catch (e) {
    return null
  }
}

export function setToken(token) {
  localStorage.setItem('id_token', token);
  setUser(jwt_decode(token).user)
}

export function setRates(rates) {
  localStorage.setItem('fund_rates', JSON.stringify(rates))
}
export function getRates() {
  return JSON.parse(localStorage.getItem('fund_rates'))
}

export function setUser(user) {
  localStorage.setItem('user_details', JSON.stringify(user))
}

export function getUser() {
  try {
    return JSON.parse(localStorage.getItem('user_details'))
  } catch(e) {
    return null
  }
}

export function isPriorityPeriod(fundName) {

}

export function isLoggedIn() {
  try {
    const idToken = localStorage.getItem('id_token');
    if(idToken){
      const decoded = jwt_decode(idToken)
      if (moment().isAfter(moment.unix(decoded.exp))) {
        clearToken()
        return false
      }
      return true
    }
    return false
  } catch (err) {
    return false
  }
}

export function tryParseJSON (jsonString){
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
            return true;
        }
    }
    catch (e) { }
    return false;
}

export function filterSpecialCharacters(string) {
  return string.replace(/[`~$%^&*()|=?;:'"<>{}[\]\\/]/gi, "")
}

export function pageView() {
  //ReactGA.pageview(window.location.pathname + window.location.search)
}

export function captureEvent(category, action, label) {
  // ReactGA.event({
  //   category,
  //   action,
  //   label
  // });
}


export function isChecksumAddress(address) {
    // Check each case

};

export function getRandomArbitrary(min, max) {
  return 5502173.3535*2
  //return Math.random() * (max - min) + min
  // const rand = localStorage.getItem('rand_fund_val')
  // if(rand) {
  //   return parseFloat(rand)
  // } else {
  //   localStorage.setItem('rand_fund_val', Math.random() * (max - min) + min)
  //   return parseFloat(localStorage.getItem('rand_fund_val'))
  // }
}

export async function kycFomoEvent(name) {
    const basicEvent = fomoClient.FomoEventBasic();
    basicEvent.event_type_id = '76851'; // Event type ID is found on Fomo dashboard (Templates -> Template ID)
    basicEvent.first_name = name.split(" ")[0];
    basicEvent.country = await getUserCountry()
    //basicEvent.amount = 'A HUGE'

    fomoClient.createEvent(basicEvent)
}

export async function signupFomoEvent(name) {
    const basicEvent = fomoClient.FomoEventBasic();
    basicEvent.event_type_id = '76712'; // Event type ID is found on Fomo dashboard (Templates -> Template ID)
    basicEvent.first_name = name.split(" ")[0];
    basicEvent.country = await getUserCountry()


    fomoClient.createEvent(basicEvent)

}

export async function investFomoEvent(name, selectedCurrency) {
    const basicEvent = fomoClient.FomoEventBasic();
    basicEvent.event_type_id = '76711'; // Event type ID is found on Fomo dashboard (Templates -> Template ID)
    basicEvent.first_name = name.split(" ")[0];
    basicEvent.country = await getUserCountry()
    basicEvent.addCustomEventField('currency', selectedCurrency);


    fomoClient.createEvent(basicEvent)
}

export async function whitepaperFomoEvent(name) {
    const basicEvent = fomoClient.FomoEventBasic();
    basicEvent.event_type_id = '76853';
    basicEvent.first_name = name.split(" ")[0];
    basicEvent.country = await getUserCountry()
    //basicEvent.amount = 'A HUGE'

    fomoClient.createEvent(basicEvent)
}

export async function claimFomoEvent(name, amount) {
    const basicEvent = fomoClient.FomoEventBasic();
    basicEvent.event_type_id = '76865'; // Event type ID is found on Fomo dashboard (Templates -> Template ID)
    basicEvent.first_name = name.split(" ")[0];
    basicEvent.country = await getUserCountry()
    basicEvent.addCustomEventField('amount', amount);

    fomoClient.createEvent(basicEvent)

}

export async function getUserCountry() {
  try {
    const response = await request.get('https://ipapi.co/json/');
    return response.data.country
  } catch (error) {
    console.error(error);
    return "Somewhere"
  }
}


