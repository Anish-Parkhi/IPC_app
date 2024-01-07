import axios from 'axios';

const BASR_URL = 'http://192.168.48.152:3000';

export const getApi = (url, params) => {
  return axios
    .get(`${BASR_URL}/${url}`, {params})
    .then(response => {
      return {
        data: response.data,
        status: response.status,
      };
    })
    .catch(error => {
      if (error.response) {
        return {
          data: error.response.data,
          status: error.response.status,
        };
      } else {
        console.log(error);
        throw error;
      }
    });
};

export const postApi = (url, data) => {
  axios
    .post(`${BASR_URL}/${url}`, data)
    .then(response => {
      return {
        data: response.data,
        status: response.status,
      };
    })
    .catch(error => {
      if (error.response) {
        return {
          data: error.response.data,
          status: error.response.status,
        };
      } else {
        console.log(error);
        throw error;
      }
    });
};
