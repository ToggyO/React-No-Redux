import * as types from './types';

export const signUpWithEmailRequest = data => ({
  type: types.SIGNUP_WITH_EMAIL_REQUEST,
  payload: data,
});

export const signUpWithGoogleRequest = data => ({
  type: types.SIGNUP_WITH_GOOGLE_REQUEST,
  payload: data,
});

export const loginInWithEmailRequest = data => ({
  type: types.LOGIN_IN_WITH_EMAIL_REQUEST,
  payload: data,
});

export const loginInWithGoogleRequest = data => ({
  type: types.LOGIN_IN_WITH_GOOGLE_REQUEST,
  payload: data,
});

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});
