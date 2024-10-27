import axios from 'axios';

const BASE_URL = 'https://a213-223-233-84-244.ngrok-free.app';

export const postApi = async (url, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${url}`, data, {
      timeout: 10000, // Set a timeout (e.g., 10 seconds)
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.log('API Error:', error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('Error data:', error.response.data);
      console.log('Error status:', error.response.status);
      return {
        data: error.response.data,
        status: error.response.status,
      };
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Error request:', error.request);
      return {
        data: {message: 'No response received from the server'},
        status: null,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error message:', error.message);
      return {
        data: {message: 'An unexpected error occurred'},
        status: null,
      };
    }
  }
};
