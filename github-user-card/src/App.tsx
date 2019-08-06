import React from 'react';
import './App.css';
import SearchForm from './components/SeachForm';

interface AppState {
  username: string;
}
class App extends React.Component<{}, AppState> {
  public state = {
    username: '',
  };

  private setUsername = (username: string): void => {
    this.setState({
      username: username,
    });
  };

  public render(): React.ReactElement {
    return <SearchForm />;
  }
}

export default App;
