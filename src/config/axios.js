import axios from 'axios';

// ! points to a data folder with mock JSON data when in development mode
const isProduction = process.env.NODE_ENV === 'production';
const endpoint = isProduction ? 'https://jsonplaceholder.typicode.com' : 'data';

const instance = axios.create({
  baseURL: endpoint,
  responseType: 'json',
  header: { 'Content-Type': 'application/json' }
});

// ! Request all GET requests as JSON files when in development mode
if (!isProduction) {
  instance.interceptors.request.use(config => {
    if (config.method === 'get') {
      config.url = config.url.replace('?', '_').replace('&', '_') + '.json';
    }
    return config;
  });
}

// handle API calls globally
instance.interceptors.response.use(response => {
  console.log(response, 'oh cool');
  return response;
}, error => {
  console.log(error, 'oh no');
  return Promise.reject(error);
});

export default instance;
