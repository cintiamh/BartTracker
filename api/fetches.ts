import axios from 'axios';

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
