import React from 'react';
import { UserData, FollowerData } from '../data/GithubData';
import axios from 'axios';
import { Card } from '@blueprintjs/core';
interface UserCardProps {
  user: UserData;
}

interface UserCardState {
  followers: FollowerData[];
}

class UserCard extends React.Component<UserCardProps, UserCardState> {
  public state = {
    followers: [],
  };

  private setFollowers = (followers: FollowerData[]): void => {
    this.setState(
      (prevState): UserCardState => ({
        ...prevState,
        followers,
      })
    );
  };

  private updateFollowers(): void {
    const { login } = this.props.user;
    const getFollowers = async (): Promise<void> => {
      try {
        const response = await axios.get<FollowerData[]>(
          `https://api.github.com/users/${login}/followers`
        );

        if (response) {
          this.setFollowers(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getFollowers();
  }

  public componentDidMount(): void {
    this.updateFollowers();
  }

  public componentDidUpdate(): void {
    this.updateFollowers();
  }

  public render(): React.ReactElement {
    const { name, avatar_url } = this.props.user;
    return (
      <>
        <Card>
          <h1>{name}</h1>
          <img src={avatar_url} alt="avatar" />
        </Card>
        {this.state.followers.map(
          (follower: FollowerData): React.ReactElement => (
            <h1 key={follower.login}>{follower.login}</h1>
          )
        )}
      </>
    );
  }
}

export default UserCard;
