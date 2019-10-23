/* eslint-disable no-unused-vars */
import { authTypes } from '@ducks/auth';
import { writeToLocalState } from '@services/ls';
import { userLogout } from '@services/auth';
import { LOCAL_STORAGE_KEYS } from '@config';

export const saveUserData = store => next => action => {
  if (
    action.type === authTypes.SIGNUP_WITH_EMAIL_SUCCESS ||
    action.type === authTypes.SIGNUP_WITH_GOOGLE_SUCCESS ||
    action.type === authTypes.LOGIN_IN_WITH_EMAIL_SUCCESS ||
    action.type === authTypes.LOGIN_IN_WITH_GOOGLE_SUCCESS
  ) {
    const { user, token, step } = action.payload.data;
    const { accessToken, refreshToken } = token;
    writeToLocalState(LOCAL_STORAGE_KEYS.USER, user);
    writeToLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    writeToLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    writeToLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP, step);
  }
  return next(action);
};

// ДОПИСАТЬ
// export const updateUserData = store => next => action => {
//   if (action.type === authTypes.CONFIRM_USER_NAME_SUCCESS) {
//     const { data } = action.payload;
//     writeToLocalState(LOCAL_STORAGE_KEYS.USER, data);
//
//   }
//   return next(action);
// };

export const clearUserData = store => next => action => {
  if (action.type === authTypes.LOGOUT_REQUEST) {
    userLogout();
  }
  return next(action);
};
