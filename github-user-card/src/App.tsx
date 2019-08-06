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
    const { username } = this.state;
    return (
      <>
        <SearchForm setUsername={this.setUsername} />
        <h1>User: {username}</h1>
      </>
    );
  }
}

export default App;
