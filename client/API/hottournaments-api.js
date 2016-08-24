const FETCH_TMT_API = 'http://localhost:8080/api/tournaments/hot-tournament';
import axios from 'axios';

const fetchHotTournament = function () {
  return axios({
    method: 'get',
    url: `${FETCH_TMT_API}`,
  }).then(response => response.data);
};

export default {
  fetchHotTournament,
};
