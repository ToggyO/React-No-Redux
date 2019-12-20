/* eslint-disable no-unused-vars */
import { store as reduxStore } from './store';

import { authTypes } from '@ducks/auth';
import { userTypes } from '@ducks/user';
import { socketTypes } from '@ducks/sockets';
import { writeToLocalState } from '@services/ls';
import { userLogout } from '@services/auth';
import { LOCAL_STORAGE_KEYS } from '@config';
import { writeToSessionState } from '@services/ss';
import { modalOpen } from '@ducks/modal/actions';
import { modalTypes } from '@ducks/modal';
import { SOCKET_METHODS } from '@config/socketMethods';
import { updateUserProjects } from '@utils/index';

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
  if (action.type === authTypes.SET_USER_NAME_SUCCESS) {
    const { data } = action.payload.data;
    writeToLocalState(LOCAL_STORAGE_KEYS.USER, data);
    writeToSessionState(LOCAL_STORAGE_KEYS.USER, data);
  }
  if (
    action.type === userTypes.UPDATE_USER_DATA_SUCCESS ||
    action.type === userTypes.CONFIRM_NEW_USER_EMAIL_SUCCESS ||
    action.type === userTypes.CHANGE_USER_AVATAR_SUCCESS
  ) {
    writeToLocalState(LOCAL_STORAGE_KEYS.USER, action.payload);
    writeToSessionState(LOCAL_STORAGE_KEYS.USER, action.payload);
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

export const watchNotificationUpdates = store => next => action => {
  if (action.type === socketTypes.SUBSCRIBE_ON_NOTIFICATIONS_SUCCESS) {
    const { watchMethod, payload } = action.payload;
    switch (watchMethod) {
      case SOCKET_METHODS.BROADCAST.SIDEBAR_BROADCAST:
        return updateUserProjects(payload);
      default:
        break;
    }
  }
  return next(action);
};
