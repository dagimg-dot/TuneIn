import { createSlice } from "@reduxjs/toolkit";
import { Playlist } from "../../shared/types";

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export interface PlaylistState {
  playlists: Playlist[];
  playlist: Playlist | null;
  currentPlaying: Playlist | null;
  status: Status;
  error: null;
}

const initialState: PlaylistState = {
  playlists: [],
  playlist: null,
  currentPlaying: null,
  status: Status.IDLE,
  error: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentPlaying(state, action) {
      state.currentPlaying = action.payload;
    },
    fetchPlaylistsStart(state) {
      state.status = Status.LOADING;
    },
    fetchPlaylistsSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.playlists = action.payload;
    },
    fetchPlaylistsFail(state, action) {
      state.status = Status.FAILED;
      state.playlists = action.payload;
    },
    fetchPlaylistStart(state) {
      state.status = Status.LOADING;
    },
    fetchPlaylistSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.playlist = action.payload;
    },
    fetchPlaylistFail(state, action) {
      state.status = Status.FAILED;
      state.playlist = action.payload;
    },
    createPlaylistStart(state) {
      state.status = Status.LOADING;
    },
    createPlaylistSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.playlists.push(action.payload);
      state.status = Status.IDLE;
    },
    createPlaylistFail(state, action) {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
    EditPlaylistStart(state) {
      state.status = Status.LOADING;
    },
    EditPlaylistSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      const updatedPlaylist: Playlist = action.payload;
      const index = state.playlists.findIndex(
        (playlist) => playlist.id === updatedPlaylist.id
      );
      if (index !== -1) {
        state.playlists[index] = updatedPlaylist;
      }
      state.status = Status.IDLE;
    },
    EditPlaylistFail(state, action) {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
    DeletePlaylistStart(state) {
      state.status = Status.LOADING;
    },
    DeletePlaylistSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.playlists = state.playlists.filter(
        (playlist) => playlist.id !== action.payload
      );
      state.status = Status.IDLE;
    },
    DeletePlaylistFail(state, action) {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
  },
});

export const {
  setCurrentPlaying,
  fetchPlaylistsStart,
  fetchPlaylistsSuccess,
  fetchPlaylistsFail,
  fetchPlaylistStart,
  fetchPlaylistSuccess,
  fetchPlaylistFail,
  createPlaylistStart,
  createPlaylistSuccess,
  createPlaylistFail,
  EditPlaylistStart,
  EditPlaylistSuccess,
  EditPlaylistFail,
  DeletePlaylistStart,
  DeletePlaylistSuccess,
  DeletePlaylistFail,
} = playlistSlice.actions;

export const fetchPlaylists = () => ({ type: "playlist/fetchPlaylistsSaga" });

export const fetchPlaylist = (id: string) => ({
  type: "playlist/fetchPlaylistSaga",
  payload: id,
});

export const createPlaylist = (playlist: Playlist) => ({
  type: "playlist/createPlaylistSaga",
  payload: playlist,
});

export const EditPlaylist = (playlist: Playlist) => ({
  type: "playlist/EditPlaylistSaga",
  payload: playlist,
});

export const DeletePlaylist = (id: string) => ({
  type: "playlist/DeletePlaylistSaga",
  payload: id,
});

export default playlistSlice.reducer;
