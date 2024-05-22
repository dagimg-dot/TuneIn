import { call, fork, put, takeEvery, all } from "redux-saga/effects";

import { Track } from "../../shared/types";
import {
  DeleteTrackFail,
  DeleteTrackStart,
  DeleteTrackSuccess,
  EditTrackFail,
  EditTrackStart,
  EditTrackSuccess,
  createTrackFail,
  createTrackStart,
  createTrackSuccess,
  fetchTracks,
  fetchTracksFail,
  fetchTracksStart,
  fetchTracksSuccess,
} from "../reducers/trackReducer";
import {
  getTracks,
  addTrack,
  updateTrack,
  deleteTrack,
} from "../../services/trackService";

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

const EditTrackSaga = function* (action: any) {
  try {
    yield put(EditTrackStart());
    const track: Track = action.payload;
    const response = yield call(updateTrack, track);
    yield put(EditTrackSuccess(response));
    yield put(fetchTracks());
  } catch (error) {
    yield put(EditTrackFail((error as Error).message));
  }
};

const DeleteTrackSaga = function* (action: any) {
  try {
    yield put(DeleteTrackStart());
    const trackId = action.payload;
    yield call(deleteTrack, trackId);
    yield put(DeleteTrackSuccess(trackId));
    yield put(fetchTracks());
  } catch (error) {
    yield put(DeleteTrackFail((error as Error).message));
  }
};

const watchFetchTracks = function* () {
  yield takeEvery("track/fetchTracksSaga", fetchTracksSaga);
};

const watchCreateTrack = function* () {
  yield takeEvery("track/createTrackSaga", createTrackSaga);
};

const watchEditTrack = function* () {
  yield takeEvery("track/EditTrackSaga", EditTrackSaga);
};

const watchDeleteTrack = function* () {
  yield takeEvery("track/DeleteTrackSaga", DeleteTrackSaga);
};

export function* trackSaga() {
  yield all([
    fork(watchCreateTrack),
    fork(watchFetchTracks),
    fork(watchEditTrack),
    fork(watchDeleteTrack),
  ]);
}
