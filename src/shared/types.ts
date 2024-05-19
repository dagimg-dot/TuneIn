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
  name: string;
  noOfTrack: number;
}
