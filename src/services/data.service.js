import axiosCustom from '../config/axios';

export const dataService = () => {
  return axiosCustom.get('/posts')
    .then(posts => posts.data);
};
