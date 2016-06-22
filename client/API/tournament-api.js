import axios from 'axios';

const API_ROOT = 'http://localhost:8080/api/tournaments';

const CreateTM = function (game, fields) {
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
  CreateTM,
};
