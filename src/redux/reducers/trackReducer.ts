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
  status: Status;
  error: null;
}

const initialState: TrackState = {
  tracks: [],
  status: Status.IDLE,
  error: null,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
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
  },
});

export const {
  fetchTracksStart,
  fetchTracksSuccess,
  fetchTracksFail,
  createTrackStart,
  createTrackSuccess,
  createTrackFail,
} = trackSlice.actions;

export const fetchTracks = () => ({ type: "track/fetchTracksSaga" });

export const createTrack = (track: Track) => ({
  type: "track/createTrackSaga",
  payload: track,
});

export default trackSlice.reducer;
