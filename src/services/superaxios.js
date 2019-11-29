// gist https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c
import axios from 'axios';

import { store } from '../store';

import { authTypes } from '@ducks/auth';
import { LOCAL_STORAGE_KEYS, API_DOMAIN, API_URL } from '@config';
import { getFromLocalState, writeToLocalState } from '@services/ls';
import { hideGlobalError, showGlobalError } from '@ducks/global/actions';
import { userLogout } from '@services/auth';
import { ERROR_CODES } from '@config/errorCodes';

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(accesstoken) {
  subscribers = subscribers.filter(callback => callback(accesstoken));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

const superaxios = axios.create({
  baseURL: `${API_DOMAIN}/api`,
});

superaxios.interceptors.request.use(config => {
  const accessToken = getFromLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

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
  response => {
    if (store.getState().global.error) {
      store.dispatch(hideGlobalError());
    }
    return Promise.resolve(response);
  },
  error => {
    const { config, request, response } = error;
    const originalRequest = config;

    if (request.status === 0) {
      store.dispatch(showGlobalError('Connection lost.'));
      return Promise.reject(error);
    }

    if (response.status === 401) {
      const { data = {} } = response;
      const { errors = [] } = data;
      if (errors.filter(item => item.code === ERROR_CODES.ACCESS_TOKEN_EXPIRED)) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true;
          const oldRefreshToken = `${getFromLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN)}`;
          store.dispatch({ type: authTypes.REFRESHING_TOKEN_REQUEST });
          superaxios
            .put(API_URL.REFRESH_TOKEN, { refreshToken: oldRefreshToken })
            // eslint-disable-next-line no-shadow
            .then(response => {
              store.dispatch({ type: authTypes.REFRESHING_TOKEN_SUCCESS });
              const { accessToken, refreshToken } = response.data.data;
              writeToLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
              writeToLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
              isAlreadyFetchingAccessToken = false;
              onAccessTokenFetched(accessToken);
            })
            .catch(() => {
              store.dispatch({ type: authTypes.REFRESHING_TOKEN_ERROR });
              store.dispatch({ type: authTypes.LOGOUT });
            });
        }

        const retryOriginalRequest = new Promise(resolve => {
          addSubscriber(accessToken => {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            resolve(superaxios(originalRequest));
          });
        });
        return retryOriginalRequest;
      }

      if (errors.filter(item => item.code === ERROR_CODES.REFRESH_TOKEN_EXPIRED)) userLogout();
    }

    if (response.status === 500) {
      store.dispatch(showGlobalError('Something went wrong.'));
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default superaxios;

// Access
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6IjdjOTBiNDc4MWUwYTQyMzY4ZDkzOGE1ZWFmZTJhYjM4IiwidXNlcl9pZCI6IjFkYThlMDZmMjhjODQ3OTNhNGI4Mzg2YmRlMTRjMWVlIiwicm9sZV9pZCI6ImJmMjJhM2ZkZjdlYjQ4NzFiODRhNGQ4ZmY1MWQwZjdkIiwiZXhwIjoxNTc0NTAwMjUyLCJpc3MiOiJTcXVhZCIsImF1ZCI6IklPIn0.JENuuWkCKA61gapoeWpnDujZPjEugNruPSboKXa5UCI
// Refresh
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMWRhOGUwNmYyOGM4NDc5M2E0YjgzODZiZGUxNGMxZWUiLCJleHAiOjE1NzUwMTg2NTIsImlzcyI6IlNxdWFkIiwiYXVkIjoiSU8ifQ.Bpk7GSRnBdgfJRhG2jrUNYO4kLG5gwFZ_z9732G-maE
