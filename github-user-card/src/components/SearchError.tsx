import React from 'react';
import { NonIdealState } from '@blueprintjs/core';

const SearchError = (): React.ReactElement => {
  const description = (
    <>
      The username could not be found.
      <br />
      Try double-checking your spelling
      <br />
      or searching another username.
    </>
  );

  return (
    <NonIdealState
      icon="search"
      title="No user found"
      description={description}
    />
  );
};

export default SearchError;
