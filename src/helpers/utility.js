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


//allows for importing a folder of images - ie importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))
export function importAll(requireContext) {
  let images = {};
  requireContext.keys().forEach((item, index) => { images[item.replace('./', '')] = requireContext(item); });
  return images;
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

export function getIndexByProperty(data, key, value) {
  for (var i = 0; i < data.length; i++) {
        if (data[i][key] == value) {
            return i;
        }
    }
  return -1;
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


export async function getUserCountry() {
  try {
    const response = await request.get('https://ipapi.co/json/');
    return response.data.country
  } catch (error) {
    console.error(error);
    return "Somewhere"
  }
}


