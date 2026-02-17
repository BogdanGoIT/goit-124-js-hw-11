// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryImage = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  console.log(images);

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  
        <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img" src="${webformatURL}" alt="${tags}"/>
        </a>

       
        <ul class="gallery-socials-list">
            <li class="gallery-social-item"><span>Likes</span> ${likes} </li>
            <li class="gallery-social-item"> <span>Views</span> ${views} </li>
            <li class="gallery-social-item"><span>Comments</span> ${comments} </li>
            <li class="gallery-social-item"><span>Downloads</span> ${downloads} </li>
        </ul>

      </li>`
    )
    .join('');

  galleryImage.innerHTML = markup;

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
  });
  gallery.refresh();
}

export function clearGallery() {
  galleryImage.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('loader');
}

export function hideLoader() {
  loader.classList.remove('loader');
}
