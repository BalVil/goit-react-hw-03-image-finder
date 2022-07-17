import { Component } from 'react';
import {
  Wrap,
  Form,
  FormBtn,
  FormLabel,
  FormInput,
  IconBtn,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = e => {
    const searchValueNormalized = e.currentTarget.value.toLowerCase();

    this.setState({ query: searchValueNormalized });
  };

  handleSubmit = e => {
    const { query } = this.state;
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }

    this.props.onSubmit(query);
    // this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit}>
          <FormBtn type="submit">
            <IconBtn />
            <FormLabel />
          </FormBtn>
          <FormInput
            value={query}
            onChange={this.handleQueryChange}
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

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
