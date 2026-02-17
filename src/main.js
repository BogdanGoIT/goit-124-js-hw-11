import { getImagesByQuery } from './js/pixabay-api';
// import renderFc from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  console.log(evt.target.elements);

  const searchValue = evt.target.elements['search-text'].value;

  getImagesByQuery(searchValue);

  evt.target.reset();
}
