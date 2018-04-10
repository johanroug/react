import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.interceptors.response.use(response => {
  console.log(response, 'oh cool');
  return response;
}, error => {
  console.log(error, 'oh no');
  return Promise.reject(error);
});

export default instance;
