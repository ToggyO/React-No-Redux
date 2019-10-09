import * as types from './types';

export const signUpRequest = credentials => ({
  type: types.SIGNUP_REQUEST,
  payload: credentials,
});

export const signInRequest = credentials => ({
  type: types.SIGNIN_REQUEST,
  payload: credentials,
});

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});
