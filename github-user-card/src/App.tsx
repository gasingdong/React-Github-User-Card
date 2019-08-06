import React from 'react';
import './App.css';
import SearchForm from './components/SeachForm';
import { UserData } from './data/GithubData';
import axios from 'axios';
import UserCard from './components/UserCard';

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
      followers_url: '',
      html_url: '',
      avatar_url: '',
    },
  };

  private setUsername = (username: string): void => {
    this.setState(
      (prevState): AppState => ({
        ...prevState,
        username: username,
      })
    );
  };

  private setUser = (user: UserData): void => {
    this.setState(
      (prevState): AppState => ({
        ...prevState,
        user: user,
      })
    );
  };

  public componentDidUpdate(prevProps: {}, prevState: AppState): void {
    const prevUsername = prevState.username;
    const { username } = this.state;

    if (username === prevUsername) {
      return;
    }

    const getGitHubUser = async (): Promise<void> => {
      try {
        const response = await axios.get<UserData>(
          `https://api.github.com/users/${username}`
        );

        if (response) {
          console.log(response.data);
          this.setUser(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getGitHubUser();
  }

  public render(): React.ReactElement {
    const { username, user } = this.state;
    return (
      <>
        <SearchForm setUsername={this.setUsername} />
        {user && user.name !== '' ? (
          <UserCard user={user} />
        ) : (
          <h1>No user found</h1>
        )}
      </>
    );
  }
}

export default App;
