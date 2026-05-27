import axios from 'axios';

const API_KEY = '56049130-cda03eac6f8abc94af207a1fe';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params: searchParams })
    .then(response => response.data);
}
