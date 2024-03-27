import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImg } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

export const galleryElement = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

export const showLoader = () => {
  loader.style.display = 'flex';
};

const hideLoader = () => {
  loader.style.display = 'none';
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const lookup = event.target.elements.search.value.trim();
  if (lookup !== '') {
    getImg(lookup).then(data => {
      renderImages(data.hits);
      hideLoader();
    });
    form.reset();
  } else {
    galleryElement.innerHTML = '';
    iziToast.show({
      message: 'Please complete the field!',
      position: 'topRight',
    });
  }
});
