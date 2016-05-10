import axios from 'axios';

const API_ROOT = 'http://localhost:8080/auth';

const userSignin = function (email, password) {
  return axios({
    method: 'post',
    url: `${API_ROOT}/login`,
    data: {
      email,
      password,
    }
  }).then(response => response.data);
};

export default {
  userSignin
};
