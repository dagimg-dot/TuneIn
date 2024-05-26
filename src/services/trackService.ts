import { Track } from "../shared/types";
import LSClient from "./LSClient";

export const getTracks = async (): Promise<Track | Track[]> => {
  return await LSClient.get("/tracks");
};

export const getTrack = async (id: string): Promise<Track | Track[]> => {
  return await LSClient.get(`/tracks/${id}`);
};

export const addTrack = async (track: Track): Promise<Track> => {
  return await LSClient.post("/tracks", track);
};

export const updateTrack = async (track: Track): Promise<Track> => {
  return await LSClient.put(`/tracks/${track.id}`, track);
};

export const deleteTrack = async (id: string): Promise<void> => {
  return await LSClient.delete(`/tracks/${id}`);
};
