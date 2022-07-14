const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=27754305-6c0117069a54d6a4ab2d99661';

export default async function fetchImages(searchName, page, perPage) {
  const response = await fetch(
    `${BASE_URL}?q=${searchName}&page=${page}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(
    new Error(`No images for your query ${searchName}`)
  );
}
