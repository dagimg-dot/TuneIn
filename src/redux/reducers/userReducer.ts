import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../shared/types";

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export interface UserState {
  user: User;
  status: Status;
  error: null;
}

const initialState: UserState = {
  user: { userName: "User", image: "" },
  status: Status.IDLE,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.status = Status.LOADING;
    },
    fetchUserSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.user = action.payload;
    },
    fetchUserFail(state, action) {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
    createUserStart(state) {
      state.status = Status.LOADING;
    },
    createUserSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.user = action.payload;
      state.status = Status.IDLE;
    },
    createUserFail(state, action) {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
    EditUserStart(state) {
      state.status = Status.LOADING;
    },
    EditUserSuccess(state, action) {
      state.status = Status.SUCCEEDED;
      state.user = action.payload;
      state.status = Status.IDLE;
    },
    EditUserFail(state, action) {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFail,
  createUserStart,
  createUserSuccess,
  createUserFail,
  EditUserStart,
  EditUserSuccess,
  EditUserFail,
} = userSlice.actions;

export const fetchUser = () => ({ type: "user/fetchUserSaga" });

export const createUser = (user: User) => ({
  type: "user/createUserSaga",
  payload: user,
});

export const EditUser = (user: User) => ({
  type: "user/EditUserSaga",
  payload: user,
});

export default userSlice.reducer
