import { combineReducers } from "redux";
import trackReducer, { TrackState } from "./trackReducer";
import playlistReducer, { PlaylistState } from "./playlistReducer";
import userReducer, { UserState } from "./userReducer";

const rootReducer = combineReducers({
  track: trackReducer,
  playlist: playlistReducer,
  user: userReducer,
});

export interface GlobalState {
  track: TrackState;
  playlist: PlaylistState;
  user: UserState;
}

export default rootReducer;
