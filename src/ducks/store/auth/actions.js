import * as types from './types';

export const setAuthInfo = ({ accessToken, accessTokenExpire, refreshToken }) => ({
  type: types.SET_AUTH_INFO,
  payload: {
    accessToken,
    accessTokenExpire,
    refreshToken,
  },
});

export const clearAuthInfo = () => ({
  type: types.CLEAR_AUTH_INFO,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});
