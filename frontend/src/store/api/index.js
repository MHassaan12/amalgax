import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}api`,
  withCredentials: true,
  headers: {
    'Accept': 'application/json'
  }
});

axiosInstance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
}, error => {
  Promise.reject(error);
});


export const get = (api) => axiosInstance.get(api)
export const post = (api, body) => axiosInstance.post(api, body);
