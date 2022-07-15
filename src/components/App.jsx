import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import * as API from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export default class App extends Component {
  state = {
    imageHits: [],
    searchQuery: '',
    page: 1,
    totalImages: null,
    largeImage: null,
    error: null,
    loading: false,
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
    if (this.state.query === data) {
      return;
    }

    this.setState({
      searchQuery: data,
      page: 1,
      imageHits: [],
    });

    window.scrollTo({ top: 0, left: 0 });
  };

  handleLoadMore = () =>
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

  handleLargeImage = newlargeImage => {
    this.setState({ largeImage: newlargeImage });
  };

  render() {
    const { imageHits, largeImage, totalImages, loading, error } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {imageHits.length < 1 && !loading && (
          <div>To find an image/images, enter the data in the search field</div>
        )}
        {/* if (status === 'idle') {<div>Please Enter search query</div>} */}
        {loading && <Loader />}
        {/* if (status === 'pending') { */}
        {/* <Loader />; */}
        {error && <div>{error.message}</div>}

        {totalImages === 0 &&
          Notify.info(
            'Sorry, there are no images matching your search query. Please change the request',
            {
              timeout: 2000,
              position: 'center-top',
              showOnlyTheLastOne: true,
            }
          )}

        {imageHits.length > 0 && (
          <>
            <ImageGallery
              images={imageHits}
              onLargeImage={this.handleLargeImage}
            />
            {imageHits.length < totalImages ? (
              <Button onClick={this.handleLoadMore} />
            ) : (
              Notify.info(
                "We're sorry, but you've reached the end of search results",
                {
                  timeout: 2000,
                  position: 'center-top',
                  showOnlyTheLastOne: true,
                }
              )
            )}
          </>
        )}

        {largeImage && <Modal modalImage={largeImage} />}

        <GlobalStyle />
      </Wrapper>
    );
  }
}

//   if (status === 'rejected') {
//     return <div>{error.message}</div>;
//   }
//   if (status === 'resolved') {
