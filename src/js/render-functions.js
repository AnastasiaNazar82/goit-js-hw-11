import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryElement } from '../main';

export function renderImages(imagesArr) {
  if (imagesArr.length == 0) {
    galleryElement.innerHTML = '';
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  } else {
    const imgGallery = imagesArr
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
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    </a>
    <div class="content-image">
    <p class="content-item">Likes<span class="info-item">${likes}</span></p>
    <p class="content-item">Views<span class="info-item">${views}</span></p>
    <p class="content-item">Comments<span class="info-item">${comments}</span></p>
    <p class="content-item">Downloads<span class="info-item">${downloads}</span></p>
    </div
    </li>`
      )
      .join('');

    galleryElement.insertAdjacentHTML('beforeend', imgGallery);
  }
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}
