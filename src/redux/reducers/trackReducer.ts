import { createSlice } from "@reduxjs/toolkit";
import { Track } from "../../shared/types";

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export interface TrackState {
  tracks: Track[];
  currentPlaying: Track | null;
  status: Status;
  error: null;
}

const initialState: TrackState = {
  tracks: [],
  currentPlaying: null,
  status: Status.IDLE,
  error: null,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setCurrentPlaying(state, action) {
      state.currentPlaying = action.payload;
    },
    fetchTracksStart(state) {
      state.status = Status.LOADING;
    },
    fetchTracksSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.tracks = action.payload;
    },
    fetchTracksFail(state, action) {
      state.status = Status.FAILED;
      state.tracks = action.payload;
    },
    createTrackStart(state) {
      state.status = Status.LOADING;
    },
    createTrackSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.tracks.push(action.payload);
      state.status = Status.IDLE;
    },
    createTrackFail(state, action) {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
    EditTrackStart(state) {
      state.status = Status.LOADING;
    },
    EditTrackSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      const updatedTrack: Track = action.payload;
      const index = state.tracks.findIndex(
        (track) => track.id === updatedTrack.id
      );
      if (index !== -1) {
        state.tracks[index] = updatedTrack;
      }
      state.status = Status.IDLE;
    },
    EditTrackFail(state, action) {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
    DeleteTrackStart(state) {
      state.status = Status.LOADING;
    },
    DeleteTrackSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.tracks = state.tracks.filter(
        (track) => track.id !== action.payload
      );
      state.status = Status.IDLE;
    },
    DeleteTrackFail(state, action) {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
  },
});

export const {
  setCurrentPlaying,
  fetchTracksStart,
  fetchTracksSuccess,
  fetchTracksFail,
  createTrackStart,
  createTrackSuccess,
  createTrackFail,
  EditTrackStart,
  EditTrackSuccess,
  EditTrackFail,
  DeleteTrackStart,
  DeleteTrackSuccess,
  DeleteTrackFail,
} = trackSlice.actions;

export const fetchTracks = () => ({ type: "track/fetchTracksSaga" });

export const createTrack = (track: Track) => ({
  type: "track/createTrackSaga",
  payload: track,
});

export const EditTrack = (track: Track) => ({
  type: "track/EditTrackSaga",
  payload: track,
});

export const DeleteTrack = (id: number | string) => ({
  type: "track/DeleteTrackSaga",
  payload: id,
});

export default trackSlice.reducer;
