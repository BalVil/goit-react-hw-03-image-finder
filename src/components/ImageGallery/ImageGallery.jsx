import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  state = { imageHits: [], error: null };

  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = 'key=27754305-6c0117069a54d6a4ab2d99661';

    const prevName = prevProps.searchTerm;
    const nextName = this.props.searchTerm;

    if (prevName !== nextName) {
      fetch(
        `${BASE_URL}?q=${this.props.searchTerm}&page=1&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(({ hits }) =>
          this.setState(() => ({
            imageHits: [...hits],
          }))
        );
    }
  }

  render() {
    console.log(this.state.imageHits);
    const { imageHits } = this.state;
    return (
      <Gallery>{imageHits && <ImageGalleryItem images={imageHits} />}</Gallery>
    );
  }
}
