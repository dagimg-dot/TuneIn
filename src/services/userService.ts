import { User } from "../shared/types";
import LSClient from "./LSClient";

export const getUser = async () => {
  return await LSClient.get<User>(`/user`);
};

export const addUser = async (user: User) => {
  return LSClient.post("/user", user);
};

export const updateUser = async (user: User) => {
  return LSClient.put("/user", user);
};
