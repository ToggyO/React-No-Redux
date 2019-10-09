import axios from 'axios';
import jwtDecode from 'jwt-decode';
import history from '@services/history';

// export default {
//   setHeaders: token => {
//     if (token) {
//       axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     } else delete axios.defaults.headers.common.Authorization;
//   },

//   checkTokens: () => {
//     const accessToken = Cookies.get('bdtoken');
//     const refreshToken = Cookies.get('bdrefreshtoken');

//     if (!accessToken || !refreshToken) return false;

//     try {
//       const { exp } = jwtDecode(accessToken);
//       if (exp < Date.now() / 1000) return false;
//     } catch (e) {
//       return false;
//     }

//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//     return true;
//   },
// };

export const setHeaders = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else delete axios.defaults.headers.common.Authorization;
};

export const checkTokens = () => {
  const accessToken = Cookies.get('bdtoken');
  const refreshToken = Cookies.get('bdrefreshtoken');

  if (!accessToken || !refreshToken) {
    localStorage.removeItem('userName');
    localStorage.removeItem('userID');
    localStorage.removeItem('countryCode');
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

  // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  return true;
};

export const clearCookies = () => {
  Cookies.remove('bdtoken');
  Cookies.remove('bdrefreshtoken');
};

export const userLogout = () => {
  history.replace('/');
  clearCookies();
  window.location.reload();
  localStorage.removeItem('userName');
  localStorage.removeItem('userID');
};
