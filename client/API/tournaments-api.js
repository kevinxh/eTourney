import axios from 'axios'

const API_ROOT = 'http://localhost:8080/api/tournaments'
const FETCH_HOT_API = 'http://localhost:8080/api/tournaments/hot'

const fetchTournaments = function (gid = null) {
  return axios({
    method: 'get',
    url: `${API_ROOT}?gid=${gid}`,
    headers: {
      Authorization: localStorage.access_token,
    },
  }).then(response => response.data)
    .catch(err => err)
}

const fetchHotTournament = function () {
  return axios({
    method: 'get',
    url: `${FETCH_HOT_API}`,
  }).then(response => response.data)
}

export default {
  fetchTournaments,
  fetchHotTournament,
}
