import React from 'react';
import './App.css';
import SearchForm from './components/SeachForm';
import { UserData } from './data/GithubData';

interface AppState {
  username: string;
  user: UserData;
}
class App extends React.Component<{}, AppState> {
  public state = {
    username: '',
    user: {
      name: '',
      followers: 0,
      followersUrl: '',
      htmlUrl: '',
      avatarUrl: '',
    },
  };

  private setUsername = (username: string): void => {
    this.setState({
      username: username,
    });
  };

  public render(): React.ReactElement {
    const { username, user } = this.state;
    return (
      <>
        <SearchForm setUsername={this.setUsername} />
        {user && user.name !== '' ? (
          <h1>User: {user.name} </h1>
        ) : (
          <h1>No user found</h1>
        )}
      </>
    );
  }
}

export default App;
