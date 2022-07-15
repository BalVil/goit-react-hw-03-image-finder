const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=27754305-6c0117069a54d6a4ab2d99661';
const PER_PAGE = 'per_page=12';

export const fetchImages = (searchName, page) => {
  return fetch(
    `${BASE_URL}?q=${searchName}&page=${page}&${API_KEY}&image_type=photo&orientation=horizontal&${PER_PAGE}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Something went wrong. Try changing the query`)
    );
  });
};
