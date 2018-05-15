import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://burger-builder-b7db1.firebaseio.com/'
});

export default axiosOrders;
