import { LOG_IN, LOG_OUT } from "./actionTypes";

export const LogInUser = (userId) => ({
  type: LOG_IN,
  payload: userId,
});

export const LogOutUser = (userId) => ({
  type: LOG_OUT,
  payload: userId,
});
