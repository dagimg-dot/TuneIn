import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  DeletePlaylistFail,
  DeletePlaylistStart,
  DeletePlaylistSuccess,
  EditPlaylistFail,
  EditPlaylistStart,
  EditPlaylistSuccess,
  createPlaylistFail,
  createPlaylistStart,
  createPlaylistSuccess,
  fetchPlaylistFail,
  fetchPlaylistStart,
  fetchPlaylistSuccess,
  fetchPlaylists,
  fetchPlaylistsFail,
  fetchPlaylistsStart,
  fetchPlaylistsSuccess,
} from "../reducers/playlistReducer";
import { Playlist } from "../../shared/types";
import {
  addPlaylist,
  deletePlaylist,
  getPlaylist,
  getPlaylists,
  updatePlaylist,
} from "../../services/playlistService";

const fetchPlaylistsSaga = function* () {
  try {
    yield put(fetchPlaylistsStart());
    const playlists: Playlist[] = yield call(getPlaylists);
    yield put(fetchPlaylistsSuccess(playlists));
  } catch (error) {
    yield put(fetchPlaylistsFail((error as Error).message));
  }
};

const fetchPlaylistSaga = function* (action: any) {
  try {
    yield put(fetchPlaylistStart());
    const id: string = action.payload;
    const playlist: Playlist = yield call(getPlaylist, id);
    yield put(fetchPlaylistSuccess(playlist));
  } catch (error) {
    yield put(fetchPlaylistFail((error as Error).message));
  }
};

const createPlaylistSaga = function* (action: any) {
  try {
    yield put(createPlaylistStart());
    const playlist: Playlist = action.payload;
    const response: Playlist = yield call(addPlaylist, playlist);
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
    const response: Playlist = yield call(updatePlaylist, playlist);
    yield put(EditPlaylistSuccess(response));
    yield put(fetchPlaylists());
  } catch (error) {
    yield put(EditPlaylistFail((error as Error).message));
  }
};

const DeletePlaylistSaga = function* (action: any) {
  try {
    yield put(DeletePlaylistStart());
    const playlistId: string = action.payload;
    yield call({ context: null, fn: deletePlaylist }, playlistId);
    yield put(DeletePlaylistSuccess(playlistId));
    yield put(fetchPlaylists());
  } catch (error) {
    yield put(DeletePlaylistFail((error as Error).message));
  }
};

const watchFetchPlaylist = function* () {
  yield takeEvery("playlist/fetchPlaylistSaga", fetchPlaylistSaga);
};

const watchFetchPlaylists = function* () {
  yield takeEvery("playlist/fetchPlaylistsSaga", fetchPlaylistsSaga);
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
    fork(watchFetchPlaylist),
    fork(watchCreatePlaylist),
    fork(watchEditPlaylist),
    fork(watchDeletePlaylist),
  ]);
}
