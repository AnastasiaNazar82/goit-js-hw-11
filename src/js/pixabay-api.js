import { showLoader } from '../main';

export function getImg(inputValue) {
  const baseUrl = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43044638-81b288208bd41d7f3c4a2027f',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${baseUrl}?${params}`;
  showLoader();
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
