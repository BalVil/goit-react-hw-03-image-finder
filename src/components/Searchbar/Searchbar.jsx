import { Component } from 'react';
import {
  Wrap,
  Form,
  FormBtn,
  FormLabel,
  FormInput,
  IconBtn,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    searchTerm: '',
  };

  handleNameChange = e =>
    this.setState({ searchTerm: e.currentTarget.value.toLowerCase() });

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchTerm.trim() === '') {
      // додати Notiflix чи react-toastify
      return alert('Enter at least one pokemon');
    }

    this.props.onSubmit(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  };

  render() {
    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit}>
          <FormBtn type="submit">
            <IconBtn />
            <FormLabel />
          </FormBtn>
          <FormInput
            value={this.state.searchTerm}
            onChange={this.handleNameChange}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Wrap>
    );
  }
}
