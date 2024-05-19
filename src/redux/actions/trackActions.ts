import { call, fork, put, takeEvery, all } from "redux-saga/effects";

import { Track } from "../../shared/types";
import {
  createTrackFail,
  createTrackStart,
  createTrackSuccess,
  fetchTracks,
  fetchTracksFail,
  fetchTracksStart,
  fetchTracksSuccess,
} from "../reducers/trackReducer";
import { getTracks, addTrack } from "../../services/trackService";

const fetchTracksSaga = function* () {
  try {
    yield put(fetchTracksStart());
    const tracks: Track[] = yield call(getTracks);
    yield put(fetchTracksSuccess(tracks));
  } catch (error) {
    yield put(fetchTracksFail((error as Error).message));
  }
};

const createTrackSaga = function* (action: any) {
  try {
    yield put(createTrackStart());
    const track: Track = action.payload;
    const response = yield call(addTrack, track);
    yield put(createTrackSuccess(response.data));
    yield put(fetchTracks());
  } catch (error) {
    yield put(createTrackFail((error as Error).message));
  }
};

const watchFetchTracks = function* () {
  yield takeEvery("track/fetchTracksSaga", fetchTracksSaga);
};

const watchCreateTrack = function* () {
  yield takeEvery("track/createTrackSaga", createTrackSaga);
};

export function* trackSaga() {
  yield all([fork(watchCreateTrack), fork(watchFetchTracks)]);
}
