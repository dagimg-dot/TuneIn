import { combineReducers } from "redux";
import trackReducer, { TrackState } from "./trackReducer";
import playlistReducer, { PlaylistState } from "./playlistReducer";

const rootReducer = combineReducers({
  track: trackReducer,
  playlist: playlistReducer,
});

export interface GlobalState {
  track: TrackState;
  playlist: PlaylistState;
}

export default rootReducer;
