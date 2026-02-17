import axios from 'axios';

const API_KEY = '28315893-0fd806bb9dd4884845b8c425c';
const url = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  console.log('searchValue: ', query);

  return axios(url, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(res => res.data.hits);
}
