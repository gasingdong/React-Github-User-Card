import React from 'react';
import { FollowerData } from '../data/GithubData';
import { Menu, MenuItem } from '@blueprintjs/core';

interface FollowersListProps {
  followers: FollowerData[];
}

const FollowersList = (props: FollowersListProps): React.ReactElement => {
  const { followers } = props;
  return (
    <Menu>
      {followers.map(
        (follower: FollowerData): React.ReactElement => (
          <MenuItem
            key={follower.login}
            href={follower.html_url}
            text={follower.login}
          ></MenuItem>
        )
      )}
    </Menu>
  );
};

export default FollowersList;
