import jwtDecode from 'jwt-decode';

import history from '@services/history';
import { LS_KEYS } from '@config';
import { clearBrowserState, getFromState } from '@utils/index';

export const userLogout = () => {
  history.replace('/');
  window.location.reload();
  clearBrowserState([LS_KEYS.USER, LS_KEYS.ACCESS_TOKEN, LS_KEYS.REFRESH_TOKEN]);
};

export const checkTokens = () => {
  const accessToken = getFromState(LS_KEYS.ACCESS_TOKEN);
  const refreshToken = getFromState(LS_KEYS.REFRESH_TOKEN);

  if (!accessToken || !refreshToken) {
    clearBrowserState([LS_KEYS.USER, LS_KEYS.ACCESS_TOKEN, LS_KEYS.REFRESH_TOKEN]);
    return false;
  }

  try {
    const { exp } = jwtDecode(accessToken);
    if (!exp) {
      userLogout();
      return false;
    }
  } catch (e) {
    userLogout();
    return false;
  }

  return true;
};
