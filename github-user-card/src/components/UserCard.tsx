import React from 'react';
import { UserData } from '../data/GithubData';

interface UserCardProps {
  user: UserData;
}

interface UserCardState {
  followers: string[];
}

class UserCard extends React.Component<UserCardProps, UserCardState> {
  public state = {
    followers: [],
  };

  public render(): React.ReactElement {
    const { name, avatar_url } = this.props.user;
    return (
      <>
        <h1>{name}</h1>
        <img src={avatar_url} alt="avatar" />
      </>
    );
  }
}

export default UserCard;
