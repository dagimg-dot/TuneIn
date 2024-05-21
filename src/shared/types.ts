export interface Track {
  id?: string;
  artist: string;
  title: string;
  duration: string;
  genre: string;
  image?: string;
  releasedDate: string;
}

export interface Playlist {
  id?: string;
  name: string;
  count: number;
  image?: string;
}
