/* eslint-disable no-unused-vars */
import { authTypes } from '@ducks/auth';
import { writeToLocalState } from '@services/ls';
import { userLogout } from '@services/auth';
import { LOCAL_STORAGE_KEYS } from '@config';

export const saveUserData = store => next => action => {
  if (action.type === authTypes.SIGNIN_SUCCESS) {
    const { user, accessToken, refreshToken } = action.payload.data;
    writeToLocalState(LOCAL_STORAGE_KEYS.USER, user);
    writeToLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    writeToLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  }
  return next(action);
};

export const clearUserData = store => next => action => {
  if (action.type === authTypes.LOGOUT_REQUEST) {
    userLogout();
  }
  return next(action);
};
