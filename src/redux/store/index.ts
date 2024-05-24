import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import { trackSaga } from "../actions/trackActions";
import { playlistSaga } from "../actions/playlistActions";
import { userSaga } from "../actions/userActions";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(trackSaga);
sagaMiddleware.run(playlistSaga);
sagaMiddleware.run(userSaga);

export default store;
