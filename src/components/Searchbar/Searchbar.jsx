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
    searchName: '',
  };

  handleNameChange = e =>
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });

  handleSubmit = e => {
    const { searchName } = this.state;
    e.preventDefault();

    if (searchName.trim() === '') {
      // додати Notiflix чи react-toastify
      return alert('Enter at least one pokemon');
    }

    this.props.onSubmit(searchName);
    this.setState({ searchName: '' });
  };

  render() {
    const { searchName } = this.state;

    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit}>
          <FormBtn type="submit">
            <IconBtn />
            <FormLabel />
          </FormBtn>
          <FormInput
            value={searchName}
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
