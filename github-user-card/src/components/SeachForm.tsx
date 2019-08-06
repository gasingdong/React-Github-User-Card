import React from 'react';

const SearchForm: React.FC = (): React.ReactElement => {
  return (
    <form>
      <input type="text" name="search" placeholder="Enter a GitHub username" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
