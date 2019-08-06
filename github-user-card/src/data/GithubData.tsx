export interface UserData {
  login: string;
  name: string;
  location: string;
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
