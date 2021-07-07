import React from 'react';
import { InputGroup } from '@blueprintjs/core';

interface SearchFormProps {
  setUsername: (username: string) => void;
}
interface SearchFormState {
  searchTerm: string;
}
class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
  public state = {
    searchTerm: '',
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    this.setState({
      searchTerm: value,
    });
  };

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const { setUsername } = this.props;
    const { searchTerm } = this.state;
    event.preventDefault();
    setUsername(searchTerm);
  };

  public render(): React.ReactElement {
    const { searchTerm } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <InputGroup
          leftIcon="search"
          placeholder="Search a GitHub username"
          value={searchTerm}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchForm;
