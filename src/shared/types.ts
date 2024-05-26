export interface Track {
  id?: string;
  artist: string;
  title: string;
  duration: string;
  genre: string;
  image?: string;
  releasedDate: string;
  isLiked: boolean;
}

export interface Playlist {
  id?: string;
  name: string;
  image?: string;
  tracks?: Track[];
}

export interface User {
  id?: string;
  userName: string;
  image?: string;
}
