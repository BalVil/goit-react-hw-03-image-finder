import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Wrapper } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyle';
import * as API from 'services/api';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { Notification } from 'components/Notification/Notification';

export default class App extends Component {
  state = {
    imageHits: [],
    searchQuery: '',
    page: 1,
    totalImages: null,
    largeImage: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState(() => ({ loading: true }));

      API.fetchImages(nextQuery, nextPage)
        .then(({ hits, totalHits }) =>
          this.setState(state => ({
            imageHits: [...state.imageHits, ...hits],
            totalImages: totalHits,
          }))
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleSearchSubmit = data => {
    if (this.state.searchQuery === data) {
      return;
    }

    this.setState({
      searchQuery: data,
      page: 1,
      imageHits: [],
    });

    window.scrollTo({ top: 0, left: 0 });
  };

  handleLoadMoreClick = () =>
    this.setState(({ page }) => ({
      page: page + 1,
    }));

  handleModalImage = newlargeImage => {
    this.setState({ largeImage: newlargeImage });
  };

  handleModalClose = () => {
    this.setState({ largeImage: null });
  };

  render() {
    const { imageHits, largeImage, totalImages, loading, error } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {loading && <Loader />}

        {error && <div>{error.message}</div>}

        {totalImages === 0 && !loading && (
          <Notification>
            Sorry, there are no images matching your search query. Please change
            the request
          </Notification>
        )}

        {imageHits.length > 0 && (
          <>
            <ImageGallery
              images={imageHits}
              onImageClick={this.handleModalImage}
            />
            {imageHits.length < totalImages ? (
              <Button onClick={this.handleLoadMoreClick} />
            ) : (
              <Notification>
                We're sorry, but you've reached the end of search results
              </Notification>
            )}
          </>
        )}

        {largeImage && (
          <Modal onModalImage={largeImage} onClose={this.handleModalClose} />
        )}

        <GlobalStyle />
      </Wrapper>
    );
  }
}
