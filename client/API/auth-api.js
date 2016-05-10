import axios from 'axios';

const API_ROOT = "http://localhost:8080/auth";

const userSignin = function (email, password) {
  return axios({
    method: 'post',
    url: `${API_ROOT}/login`,
    data: {
      email,
      password,
    }
  })
  .then(response => {
    console.log('response success: ' + response.data.success);
    console.log('response status: ' + response.status);
    console.log('response access token: ' + response.data.access_token);
  });
};

export default {
  userSignin
};
