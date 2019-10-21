import * as types from './types';

export const signUpWithEmailRequest = email => ({
  type: types.SIGNUP_WITH_EMAIL_REQUEST,
  payload: email,
});

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});
