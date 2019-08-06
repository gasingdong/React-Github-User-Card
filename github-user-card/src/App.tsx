import React from 'react';
import './App.css';
import SearchForm from './components/SeachForm';

class App extends React.Component {
  public state = {
    user: {},
  };

  public render(): React.ReactElement {
    return <SearchForm />;
  }
}

export default App;
