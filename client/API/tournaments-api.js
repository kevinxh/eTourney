// For now, just mock
import axios from 'axios';
import * as gameTypes from '../constants/tournaments';

const API_ROOT = 'http://localhost:8080/api/tournaments';

const tournaments = [
  { id: 1, gid: 1, name: 'Just a tourney', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 2, gid: 1, name: 'Just a tourney', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 3, gid: 1, name: 'Just a tourney', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 4, gid: 2, name: 'basdf', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 5, gid: 3, name: 'aaa', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
];

const fetchTournaments = function (gid = null) {
  return axios({
    method: 'get',
    url: `${API_ROOT}?gid=${gid}`,
    headers: {
      Authorization: localStorage.access_token
    }
  }).then(response => response.data.tournaments)
    .catch(err => err)
};

const createTournament = function (game, fields) {
  return axios({
    method: 'post',
    url: `${API_ROOT}`,
    data: {
      game,
      tournamentName: fields.tournamentName,
    }
  }).then(response => response.data);
};


export default {
  fetchTournaments,
  createTournament
};
