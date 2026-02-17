import axios from 'axios';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { createGallery } from './render-functions';

const API_KEY = '28315893-0fd806bb9dd4884845b8c425c';
const url = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  if (!query.trim()) {
    alert('Пустий рядок');
    return;
  }

  console.log(query);
  axios(url, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(res => {
      if (res.data.hits.length > 0) {
        // console.log(res.data.hits);

        createGallery(res.data.hits);
      } else {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
      }
    })
    .catch(err => console.log(err));
}
