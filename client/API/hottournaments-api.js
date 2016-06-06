const FETCH_TMT_API = 'http://localhost:8080/hot-tournament';
import axios from 'axios';

const fetchHotTournament = function () {
  return axios({
    responseType: 'json',
    method: 'get',
    url: `${FETCH_TMT_API}`,
  }).then(response => response.data);
};

export default {
  fetchHotTournament,
};
