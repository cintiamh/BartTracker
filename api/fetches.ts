/**
 * Helper methods doing calls to Bart's API. Using axios since it supports promises.
 * Making it GraphQL friendly. (@cintiamh)
 */
import axios from 'axios';

// Bart's official API key
const BART_API_KEY = 'MW9S-E7SL-26DU-VV8V';
const BART_API_MAIN_PATH = 'https://api.bart.gov/api/';

export function getStations() {
    return axios.get(
      "https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y"
    ).then(resp => {
      return resp.data.root.stations.station;
    });
}

export function getStationByAbbr(abbr: string) {
    return axios.get(
      `http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=${abbr}&key=MW9S-E7SL-26DU-VV8V&json=y`
    ).then(resp => {
      return resp.data.root.stations.station;
    });
}

export function getRoutes() {
  return axios.get('http://api.bart.gov/api/route.aspx?cmd=routes&key=MW9S-E7SL-26DU-VV8V&json=y')
  .then(resp => {
    return resp.data.root.routes.route;
  })
}

export function getRouteByNum(num: number) {
  return axios.get(`http://api.bart.gov/api/route.aspx?cmd=routeinfo&route=${num}&key=MW9S-E7SL-26DU-VV8V&json=y`)
  .then(resp => {
    return resp.data.root.routes.route;
  })
}