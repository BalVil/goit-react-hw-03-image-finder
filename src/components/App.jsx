import { Component } from 'react';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchSubmit = searchTerm => this.setState({ searchTerm });

  render() {
    const { searchTerm } = this.state;
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery searchTerm={searchTerm} />
        <GlobalStyle />
      </Wrapper>
    );
  }
}
