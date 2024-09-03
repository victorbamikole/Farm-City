import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";


/**
 * Helper function that configures axios requests
 * @param {object} config The configuration data.
 * route - The route to make request to. e.g profiles, search?q=term&size=5
 * method - The HTTP method to use. e.g post, get, patch,
 * payload - The request body payload
 * token - The authorization token to use if any jjhjhjhjhjhjhjhjjjhhj
 * @returns {Promise} The axios promise
 */
const request = async (
  {
    route,
    method,
    payload,
    params,
  }
) => {
  const token = await AsyncStorage.getItem('token');
  method = method || 'get';
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  if (!token) {
    delete headers.Authorization;
  }
  return axios({
    data: payload,
    url: `https://farm-city-be.onrender.com/api/${route}`,
    method,
    headers,
    params,
  });
};

export default request;
