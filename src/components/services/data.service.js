import axiosCustom from '../../config/axios';
import '../../data/posts.json';

export const dataService = (props) => {
  return axiosCustom.get('/posts')
    .then(posts => {
      return posts.data;
    });
};
