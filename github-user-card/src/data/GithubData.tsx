export interface UserData {
  login: string;
  name: string;
  followers: number;
  followers_url: string;
  html_url: string;
  avatar_url: string;
}

export interface FollowerData {
  login: string;
  avatar_url: string;
  html_url: string;
}
