import axiosCustom from '../../config/axios';

export const dataService = (props) => {
  return axiosCustom.get('/posts')
    .then(posts => {
      return posts.data;
    });
};
