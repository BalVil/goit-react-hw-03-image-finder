import { Component } from 'react';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchName: '',
    page: 1,
  };

  formSubmit = data => {
    this.setState({ searchName: data, page: 1 });
  };

  handleMoreImage = () =>
    this.setState(prev => ({
      page: prev.page + 1,
    }));

  render() {
    const { searchName, page } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery
          imageName={searchName}
          pageNumber={page}
          onMore={this.handleMoreImage}
        />
        <GlobalStyle />
      </Wrapper>
    );
  }
}
