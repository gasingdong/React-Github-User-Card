import React from 'react';

interface SearchFormState {
  searchTerm: string;
}
class SearchForm extends React.Component<{}, SearchFormState> {
  public state = {
    searchTerm: '',
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    this.setState({
      searchTerm: value,
    });
  };

  public render(): React.ReactElement {
    const { searchTerm } = this.state;
    return (
      <form>
        <input
          type="text"
          name="search"
          value={searchTerm}
          placeholder="Enter a GitHub username"
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
