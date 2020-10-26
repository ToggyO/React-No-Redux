// gist https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c
import axios from 'axios';

import { LS_KEYS, API_DOMAIN, API_URL } from '@config';
import { writeToLocalState } from '@services/ls';
// import { userLogout } from '@services/auth';
// import { ERROR_CODES } from '@config';
import { writeToSessionState } from '@services/ss';
import { checkLocalStorage, getFromState } from '@utils/index';
// import api from '@services/api';

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(accesstoken) {
  subscribers = subscribers.filter(callback => callback(accesstoken));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

const superaxios = axios.create({
  baseURL: `${API_DOMAIN}`,
  // baseURL: `${API_DOMAIN}/api/${API_VERSION}`,
});

superaxios.interceptors.request.use(config => {
  const accessToken = getFromState(LS_KEYS.ACCESS_TOKEN);

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (accessToken) {
    headers.Authorization = config.headers.Authorization || `Bearer ${accessToken}`;
  }
  return {
    ...config,
    headers,
  };
});

superaxios.interceptors.response.use(
  response => response,
  async error => {
    const { config, response } = error;
    // const { config, request, response } = error;
    const originalRequest = config;

    // if (response.status === 401) {
    //   await api.auth.logOut();
    // }

    if (response.status === 401) {
      // const { data = {} } = response;
      // const { errors } = data;

      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true;
        const oldRefreshToken = `${getFromState(LS_KEYS.REFRESH_TOKEN)}`;

        superaxios
          .put(API_URL.AUTH.REFRESH_TOKEN, { refreshToken: oldRefreshToken })
          // eslint-disable-next-line no-shadow
          .then(response => {
            const { accessToken, refreshToken } = response.data.data;
            if (checkLocalStorage()) {
              writeToLocalState(LS_KEYS.ACCESS_TOKEN, accessToken);
              writeToLocalState(LS_KEYS.REFRESH_TOKEN, refreshToken);
            } else {
              writeToSessionState(LS_KEYS.ACCESS_TOKEN, accessToken);
              writeToSessionState(LS_KEYS.REFRESH_TOKEN, refreshToken);
            }
            isAlreadyFetchingAccessToken = false;
            onAccessTokenFetched(accessToken);
          })
          .catch(() => {});
      }

      const retryOriginalRequest = new Promise(resolve => {
        addSubscriber(accessToken => {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          resolve(superaxios(originalRequest));
        });
      });
      return retryOriginalRequest;
    }

    return Promise.reject(error);
  }
);

export default superaxios;

// Access
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6IjdjOTBiNDc4MWUwYTQyMzY4ZDkzOGE1ZWFmZTJhYjM4IiwidXNlcl9pZCI6IjFkYThlMDZmMjhjODQ3OTNhNGI4Mzg2YmRlMTRjMWVlIiwicm9sZV9pZCI6ImJmMjJhM2ZkZjdlYjQ4NzFiODRhNGQ4ZmY1MWQwZjdkIiwiZXhwIjoxNTc0NTAwMjUyLCJpc3MiOiJTcXVhZCIsImF1ZCI6IklPIn0.JENuuWkCKA61gapoeWpnDujZPjEugNruPSboKXa5UCI
// Refresh
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMWRhOGUwNmYyOGM4NDc5M2E0YjgzODZiZGUxNGMxZWUiLCJleHAiOjE1NzUwMTg2NTIsImlzcyI6IlNxdWFkIiwiYXVkIjoiSU8ifQ.Bpk7GSRnBdgfJRhG2jrUNYO4kLG5gwFZ_z9732G-maE
