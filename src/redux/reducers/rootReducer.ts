import { combineReducers } from "redux";
import trackReducer, { TrackState } from "./trackReducer";

const rootReducer = combineReducers({
  track: trackReducer,
});

export interface GlobalState {
  track: TrackState;
}

export default rootReducer;
