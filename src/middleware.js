/* eslint-disable no-unused-vars */
import { store as reduxStore } from './store';

import { authTypes } from '@ducks/auth';
import { writeToLocalState } from '@services/ls';
import { userLogout } from '@services/auth';
import { LOCAL_STORAGE_KEYS } from '@config';
import { writeToSessionState } from '@services/ss';
import { modalOpen } from '@ducks/modal/actions';
import { modalTypes } from '@ducks/modal';

export const saveUserData = store => next => action => {
  if (
    action.type === authTypes.SIGNUP_WITH_EMAIL_SUCCESS ||
    action.type === authTypes.SIGNUP_WITH_GOOGLE_SUCCESS ||
    action.type === authTypes.LOGIN_IN_WITH_EMAIL_REMEMBER_ME_SUCCESS ||
    action.type === authTypes.LOGIN_IN_WITH_GOOGLE_REMEMBER_ME_SUCCESS ||
    action.type === authTypes.SET_PASSWORD_INVITE_SUCCESS
  ) {
    const { user, token, registrationStep } = action.payload.data;
    const { accessToken, refreshToken } = token;

    writeToLocalState(LOCAL_STORAGE_KEYS.USER, user);
    writeToLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    writeToLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    writeToLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP, registrationStep);
  }

  if (
    action.type === authTypes.LOGIN_IN_WITH_EMAIL_SUCCESS ||
    action.type === authTypes.LOGIN_IN_WITH_GOOGLE_SUCCESS
  ) {
    const { user, token, registrationStep } = action.payload.data;
    const { accessToken, refreshToken } = token;

    writeToSessionState(LOCAL_STORAGE_KEYS.USER, user);
    writeToSessionState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    writeToSessionState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    writeToSessionState(LOCAL_STORAGE_KEYS.REGISTER_STEP, registrationStep);
  }
  return next(action);
};

export const updateUsersData = store => next => action => {
  if (
    action.type === authTypes.SET_USER_NAME_SUCCESS ||
    action.type === authTypes.SET_USER_NAME_INVITE_SUCCESS
  ) {
    const { data } = action.payload.data;
    writeToLocalState(LOCAL_STORAGE_KEYS.USER, data);
  }
  return next(action);
};

export const clearUserData = store => next => action => {
  if (action.type === authTypes.LOGOUT) {
    userLogout();
  }
  return next(action);
};

export const saveRegistrationStep = store => next => action => {
  if (
    action.type === authTypes.CONFIRM_EMAIL_SUCCESS ||
    action.type === authTypes.SET_USER_NAME_SUCCESS ||
    action.type === authTypes.SET_USER_NAME_INVITE_SUCCESS ||
    action.type === authTypes.SET_COMPANY_NAME_SUCCESS ||
    action.type === authTypes.SET_TEAM_SUCCESS ||
    action.type === authTypes.SET_FIRST_PROJECT_SUCCESS ||
    action.type === authTypes.REGISTRATION_DONE_SUCCESS
  ) {
    const { registrationStep } = action.payload.data;
    writeToLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP, registrationStep);
  }
  return next(action);
};

export const showWarning = store => next => action => {
  if (action.type === authTypes.VALIDATE_SET_NEW_PASSWORD_CODE_ERROR) {
    // reduxStore.dispatch({ type: modalTypes.MODAL_OPEN, payload: 'DeprecatedLinkMessage' });
    reduxStore.dispatch(modalOpen('DeprecatedLinkMessage'));
  }
  return next(action);
};
