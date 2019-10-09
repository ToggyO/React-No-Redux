/* eslint-disable no-unused-vars */
import { authTypes } from '@ducks/auth';

import { writeToLocalState } from '@services/ls';

export const saveUserData = store => next => action => {
  if (action.type === authTypes.SIGNIN_SUCCESS) {
    const { user, accessToken, refreshToken } = action.payload.data;
    writeToLocalState('USER', user);
    writeToLocalState('ACCESS_TOKEN', accessToken);
    writeToLocalState('REFRESH_TOKEN', refreshToken);
  }
  return next(action);
};

export const logout = store => next => action => {
  if (action.type === authTypes.LOGOUT_REQUEST) {
    userLogout();
  }
  return next(action);
};
