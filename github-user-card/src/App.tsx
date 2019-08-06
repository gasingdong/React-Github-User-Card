import React from 'react';

import './App.scss';

import SearchForm from './components/SeachForm';
import { UserData } from './data/GithubData';
import axios from 'axios';
import UserCard from './components/UserCard';
import SearchError from './components/SearchError';
import { Spinner } from '@blueprintjs/core';

interface AppState {
  username: string;
  user: UserData;
  error: boolean;
  loading: boolean;
}
class App extends React.Component<{}, AppState> {
  public state = {
    username: '',
    user: {
      login: '',
      name: '',
      location: '',
      followers: 0,
      followers_url: '',
      html_url: '',
      avatar_url: '',
    },
    error: false,
    loading: false,
  };

  private setUsername = (username: string): void => {
    this.setState(
      (prevState): AppState => ({
        ...prevState,
        username,
      })
    );
  };

  private setUser = (user: UserData): void => {
    this.setState(
      (prevState): AppState => ({
        ...prevState,
        user,
      })
    );
  };

  private setError = (error: boolean): void => {
    this.setState(
      (prevState): AppState => ({
        ...prevState,
        error,
      })
    );
  };

  private setLoading = (loading: boolean): void => {
    this.setState(
      (prevState): AppState => ({
        ...prevState,
        loading,
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
        this.setLoading(true);
        const response = await axios.get<UserData>(
          `https://api.github.com/users/${username}`
        );

        if (response) {
          this.setUser(response.data);
          this.setError(false);
        }
      } catch (err) {
        console.log(err);
        this.setError(true);
      } finally {
        this.setLoading(false);
      }
    };

    getGitHubUser();
  }

  private getCardComponent = (): React.ReactElement => {
    const { username, user, error, loading } = this.state;

    if (!username) {
      return <></>;
    } else if (loading) {
      return <Spinner />;
    } else if (error) {
      return <SearchError />;
    } else {
      return <UserCard user={user} />;
    }
  };

  public render(): React.ReactElement {
    return (
      <div className="app">
        <div className="app-wrapper">
          <h1>GitHub User Cards</h1>
          <SearchForm setUsername={this.setUsername} />
          {this.getCardComponent()}
        </div>
      </div>
    );
  }
}

export default App;
