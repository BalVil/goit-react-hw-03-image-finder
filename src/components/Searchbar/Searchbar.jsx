import { Component } from 'react';
import { Wrap, Form, FormBtn, FormLabel, FormInput } from './Searchbar.styled';

export default class Searchbar extends Component {
  render() {
    return (
      <Wrap>
        <Form>
          <FormBtn type="submit">
            <FormLabel />
          </FormBtn>
          <FormInput
            type="text"
            name="searchQuery"
            autoComplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Wrap>
    );
  }
}
