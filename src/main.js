// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

hideLoader();

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  console.log(evt.target.elements);

  const searchValue = evt.target.elements['search-text'].value;

  if (!searchValue.trim()) {
    iziToast.show({
      message: 'Рядок пустий',
      color: 'red',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchValue)
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
    .catch(err => {
      console.log(err);

      iziToast.show({
        message: err.message,
        color: 'red',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      evt.target.reset();
    });
}
