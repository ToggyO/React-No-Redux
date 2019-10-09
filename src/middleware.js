/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie';
import { authTypes } from '@ducks/auth';
import { meTypes } from '@ducks/me';
import { globalTypes } from '@ducks/_global';
import { userLogout } from '@services/auth';

export const saveTokens = store => next => action => {
  if (action.type === authTypes.TWO_FACTOR_AUTH_SUCCESS) {
    const { accessToken, refreshToken } = action.payload.data;

    Cookies.set('bdtoken', accessToken);
    Cookies.set('bdrefreshtoken', refreshToken);
  }
  return next(action);
};

export const saveUserData = store => next => action => {
  if (action.type === authTypes.SIGNIN_SUCCESS || action.type === authTypes.SIGNUP_SUCCESS) {
    const { userName, id } = action.payload.data;

    localStorage.setItem('userName', userName);
    localStorage.setItem('userID', id);
  }
  if (action.type === meTypes.GET_PROFILE_SUCCESS) {
    const { userName, id } = action.payload.data.user;
    const { countryCode } = action.payload.data;

    localStorage.setItem('userName', userName);
    localStorage.setItem('userID', id);
    localStorage.setItem('countryCode', countryCode);
  }
  return next(action);
};

export const renewCountryDataOnTokenRefresh = store => next => action => {
  if (action.type === globalTypes.REFRESHING_TOKEN_SUCCESS) {
    store.dispatch({ type: meTypes.GET_PROFILE_REQUEST });
  }

  return next(action);
};

export const logout = store => next => action => {
  if (action.type === authTypes.LOGOUT_REQUEST) {
    userLogout();
  }
  return next(action);
};
