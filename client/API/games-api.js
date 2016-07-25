import axios from 'axios';

const API_ROOT = 'http://localhost:8080/api/games';

const fetchGames = function (gameName = '') {
  return axios({
    method: 'get',
    url: `${API_ROOT}/${gameName}`
  }).then(response => response.data.games);
};

const fetchTopGames = function () {
  return axios({
    method: 'get',
    url: `${API_ROOT}/top`
  }).then(response => response.data.games);
};

const fetchGame = function (gameId) {
  return axios({
    method: 'get',
    url: `${API_ROOT}/id/${gameId}`
  }).then(response => response.data.game);
};

export default {
  fetchGames,
  fetchTopGames,
  fetchGame
};
