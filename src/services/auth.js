import jwtDecode from 'jwt-decode';

import { clearSessionState, getFromSessionState } from '@services/ss';
import { getFromLocalState, clearLocalState } from '@services/ls';
import history from '@services/history';
import { LOCAL_STORAGE_KEYS } from '@config';
// cr-20 можно сделать просто localStorage.clear() и sessionStorage.clear(). Или, если будешь хранить в localStorage состояние сайдбара, то написать функцию, которая будет подчищать все, кроме определенного ключа
export const userLogout = () => {
  history.replace('/');
  window.location.reload();
  // Local storage
  clearLocalState(LOCAL_STORAGE_KEYS.USER);
  clearLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  clearLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
  clearLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP);
  // Session storage
  clearSessionState(LOCAL_STORAGE_KEYS.USER);
  clearSessionState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  clearSessionState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
  clearSessionState(LOCAL_STORAGE_KEYS.REGISTER_STEP);
};

export const checkTokens = () => {
  // cr-20 getFrom тоже абстрагировать в одну функцию, которая будет пытаться забрать сначала из sessionStorage и возвращать, либо, в случае неудачи - заберет из localStorage
  const accessToken =
    getFromLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) ||
    getFromSessionState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  const refreshToken =
    getFromLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN) ||
    getFromSessionState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);

  if (!accessToken || !refreshToken) {
    // Local storage
    clearLocalState(LOCAL_STORAGE_KEYS.USER);
    clearLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    clearLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
    clearLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP);
    // Session storage
    clearLocalState(LOCAL_STORAGE_KEYS.USER);
    clearLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    clearLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
    clearLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP);
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
