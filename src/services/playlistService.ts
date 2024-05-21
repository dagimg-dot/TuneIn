import { Playlist } from "../shared/types";
import LSClient from "./LSClient";

export const getPlaylists = async () => {
  return await LSClient.get<Playlist>("/playlists");
};

export const getPlaylist = async (id: string) => {
  return await LSClient.get<Playlist>(`/playlists/${id}`);
};

export const addPlaylist = async (playlist: Playlist) => {
  return await LSClient.post("/playlists", playlist);
};

export const updatePlaylist = async (playlist: Playlist) => {
  return await LSClient.put<Playlist>(`/playlists/${playlist.id}`, playlist);
};

export const deletePlaylist = async (id: string): Promise<void> => {
  return await LSClient.delete(`/playlists/${id}`);
};
