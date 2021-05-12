import axios from "axios";
import { API_SERVER_HOSTNAME } from "./globals";
import { getJwt } from "./jwt";


const BASE_URL = 'https://'+API_SERVER_HOSTNAME+'/api/v1/';
//const BASE_URL = 'http://127.0.0.1:8000/api/v1/';
const axiosInterceptor = axios.create({
  baseURL: BASE_URL
});


axiosInterceptor.interceptors.request.use(
  async function(config) {
    const token = await getJwt();
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + `${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default axiosInterceptor;