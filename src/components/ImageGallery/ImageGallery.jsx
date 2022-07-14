import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import fetchImages from 'services/api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

const PER_PAGE = 12;

export default class ImageGallery extends Component {
  state = {
    imageHits: [],
    totalPages: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevProps.pageNumber;
    const nextPage = this.props.pageNumber;

    if (prevName !== nextName) {
      this.setState({ status: 'pending', imageHits: [] });

      return fetchImages(nextName, nextPage, PER_PAGE)
        .then(({ hits, totalHits }) =>
          this.setState({
            imageHits: [...hits],
            totalPages: Math.ceil(totalHits / PER_PAGE),
            status: 'resolved',
          })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      return fetchImages(nextName, nextPage, PER_PAGE)
        .then(({ hits }) =>
          this.setState(state => ({
            imageHits: [...state.imageHits, ...hits],
            status: 'resolved',
          }))
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    console.log(this.state.imageHits);
    const { imageHits, error, status, totalPages } = this.state;
    const nextPage = this.props.pageNumber;

    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <div>{error.message}</div>;
    }
    if (status === 'resolved') {
      return (
        <>
          <Gallery>
            {imageHits && <ImageGalleryItem images={imageHits} />}
          </Gallery>
          {imageHits.length > 0 && totalPages !== nextPage && (
            <Button handleMoreImage={this.props.onMore} />
          )}
        </>
      );
    }
  }
}
