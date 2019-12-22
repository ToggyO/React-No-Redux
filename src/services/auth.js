import jwtDecode from 'jwt-decode';

import history from '@services/history';
import { LOCAL_STORAGE_KEYS } from '@config';
import { getFromState } from '@utils/index';

// cr-20-solved можно сделать просто localStorage.clear() и sessionStorage.clear().
// Или, если будешь хранить в localStorage состояние сайдбара, то написать функцию, которая будет подчищать все,
// кроме определенного ключа
export const userLogout = () => {
  history.replace('/');
  window.location.reload();
  // Local storage
  localStorage.clear();
  // Session storage
  sessionStorage.clear();
};

export const checkTokens = () => {
  // cr-20-solved getFrom тоже абстрагировать в одну функцию,
  // которая будет пытаться забрать сначала из sessionStorage и возвращать,
  // либо, в случае неудачи - заберет из localStorage
  const accessToken = getFromState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  const refreshToken = getFromState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);

  if (!accessToken || !refreshToken) {
    // Local storage
    localStorage.clear();
    // Session storage
    sessionStorage.clear();
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
