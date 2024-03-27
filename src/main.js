import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImg } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

export const galleryElement = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loaderItem = document.querySelector('.conteiner-loader');
const inputValue = document.querySelector('input');

loaderItem.style.display = 'none';

export const showLoader = () => {
  loaderItem.style.display = 'flex';
};

const hideLoader = () => {
  loaderItem.style.display = 'none';
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchImgs = inputValue.value.trim();
  if (searchImgs !== '') {
    getImg(searchImgs).then(data => {
      renderImages(data.hits);
      hideLoader();
    });
    form.reset();
  } else {
    galleryElement.innerHTML = '';
    iziToast.info({
      message: 'Please complete the field!',
      position: 'topRight',
    });
  }
});
