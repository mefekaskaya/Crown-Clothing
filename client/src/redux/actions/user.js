import { actionTypes } from "../types";

export const googleLoginStart = () => ({
  type: actionTypes.GOOGLE_LOGIN_START
});

export const loginSuccess = user => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = error => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error
});

export const emailLoginStart = emailAndPassword => ({
  type: actionTypes.EMAIL_LOGIN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: actionTypes.CHECK_USER_SESSION
});

export const logoutStart = () => ({
  type: actionTypes.LOGOUT_START
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS
});

export const logoutFailure = error => ({
  type: actionTypes.LOGOUT_FAILURE,
  payload: error
});

export const registerStart = userCredentials => ({
  type: actionTypes.REGISTER_START,
  payload: userCredentials
});

export const registerSuccess = ({ user, additionalData }) => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload: { user, additionalData }
});

export const registerFailure = error => ({
  type: actionTypes.REGISTER_FAILURE,
  payload: error
});