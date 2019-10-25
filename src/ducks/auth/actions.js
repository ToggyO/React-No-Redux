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

export const confirmEmail = data => ({
  type: types.CONFIRM_EMAIL_REQUEST,
  payload: data,
});

export const setUserName = data => ({
  type: types.SET_USER_NAME_REQUEST,
  payload: data,
});

export const setCompanyName = data => ({
  type: types.SET_COMPANY_NAME_REQUEST,
  payload: data,
});

export const setTeam = data => ({
  type: types.SET_TEAM_REQUEST,
  payload: data,
});

export const setFirstProjectRequest = data => ({
  type: types.SET_FIRST_PROJECT_REQUEST,
  payload: data,
});

export const registrationDone = data => ({
  type: types.REGISTRATION_DONE_REQUEST,
  payload: data,
});

export const clearStoreErrors = () => ({
  type: types.CLEAR_STORE_ERRORS,
});

// export const logoutRequest = () => ({
//   type: types.LOGOUT,
// });
