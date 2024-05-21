import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  DeletePlaylistStart,
  EditPlaylistFail,
  EditPlaylistStart,
  EditPlaylistSuccess,
  createPlaylistFail,
  createPlaylistStart,
  createPlaylistSuccess,
  fetchPlaylists,
  fetchPlaylistsFail,
  fetchPlaylistsStart,
  fetchPlaylistsSuccess,
} from "../reducers/playlistReducer";
import { Playlist } from "../../shared/types";
import {
  addPlaylist,
  deletePlaylist,
  getPlaylists,
  updatePlaylist,
} from "../../services/playlistService";

const fetchPlaylistSaga = function* () {
  try {
    yield put(fetchPlaylistsStart());
    const playlists: Playlist[] = yield call(getPlaylists);
    yield put(fetchPlaylistsSuccess(playlists));
  } catch (error) {
    yield put(fetchPlaylistsFail((error as Error).message));
  }
};

const createPlaylistSaga = function* (action: any) {
  try {
    yield put(createPlaylistStart());
    const playlist: Playlist = action.payload;
    const response = yield call(addPlaylist, playlist);
    yield put(createPlaylistSuccess(response));
    yield put(fetchPlaylists());
  } catch (error) {
    yield put(createPlaylistFail((error as Error).message));
  }
};

const EditPlaylistSaga = function* (action: any) {
  try {
    yield put(EditPlaylistStart());
    const playlist: Playlist = action.payload;
    const response = yield call(updatePlaylist, playlist);
    yield put(EditPlaylistSuccess(response));
    // yield put(fetchPlaylists());
  } catch (error) {
    yield put(EditPlaylistFail((error as Error).message));
  }
};

const DeletePlaylistSaga = function* (action: any) {
  try {
    yield put(DeletePlaylistStart());
    const playlistId: Playlist = action.payload;
    yield call(deletePlaylist, playlistId);
    yield put(EditPlaylistSuccess(playlistId));
    // yield put(fetchPlaylists());
  } catch (error) {
    yield put(EditPlaylistFail((error as Error).message));
  }
};

const watchFetchPlaylists = function* () {
  yield takeEvery("playlist/fetchPlaylistsSaga", fetchPlaylistSaga);
};

const watchCreatePlaylist = function* () {
  yield takeEvery("playlist/createPlaylistSaga", createPlaylistSaga);
};

const watchEditPlaylist = function* () {
  yield takeEvery("playlist/EditPlaylistSaga", EditPlaylistSaga);
};

const watchDeletePlaylist = function* () {
  yield takeEvery("playlist/DeletePlaylistSaga", DeletePlaylistSaga);
};

export function* playlistSaga() {
  yield all([
    fork(watchFetchPlaylists),
    fork(watchCreatePlaylist),
    fork(watchEditPlaylist),
    fork(watchDeletePlaylist),
  ]);
}
