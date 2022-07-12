import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Wrapper } from './App.styled';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Searchbar />
        <GlobalStyle />
      </Wrapper>
    );
  }
}
