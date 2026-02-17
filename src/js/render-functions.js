const gallery = document.querySelector('.gallery');

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
        <img src="${webformatURL}" alt="${tags} class="gallery-img"/>
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

  gallery.innerHTML = markup;
}

export function clearGallery() {
  gallery.innerHTML = '';
}
