import axios from 'axios';

const BASR_URL = 'https://teal-easy-anemone.cyclic.app/';

// https://teal-easy-anemone.cyclic.app/ 
// https://ipc-insights.onrender.com/

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
