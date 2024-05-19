// all crud operations for track

import TuneClient from "./TuneClient";
import { Track } from "../shared/types";

export const getTracks = async (): Promise<Track[]> => {
  return await TuneClient.get("/tracks");
};

export const getTrack = async (id: string): Promise<Track> => {
  return await TuneClient.get(`/tracks/${id}`);
};

export const addTrack = async (track: Track): Promise<Track> => {
  return await TuneClient.post("/tracks", track);
};

export const updateTrack = async (track: Track): Promise<Track> => {
  return await TuneClient.put(`/tracks/${track.id}`, track);
};

export const deleteTrack = async (id: string): Promise<void> => {
  return await TuneClient.delete(`/tracks/${id}`);
};

export const searchTracks = async (query: string): Promise<Track[]> => {
  return await TuneClient.get(`/tracks/search?q=${query}`);
};
