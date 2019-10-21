// gist https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c

import axios from 'axios';

// import { globalTypes } from '@ducks/_global';

// import { store } from '../store';

import { LOCAL_STORAGE_KEYS, API_DOMAIN, API_URL } from '@config';
import { getFromLocalState, writeToLocalState } from '@services/ls';

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
  response => response,
  error => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;

    if (status === 401) {
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true;
        const oldRefreshToken = getFromLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
        // store.dispatch({ type: globalTypes.REFRESHING_TOKEN_REQUEST });
        superaxios
          .put(API_URL.TOKEN, { refreshToken: oldRefreshToken })
          .then(response => {
            // store.dispatch({ type: globalTypes.REFRESHING_TOKEN_SUCCESS });
            const { accessToken, refreshToken } = response.data.data;
            writeToLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
            writeToLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
            isAlreadyFetchingAccessToken = false;
            onAccessTokenFetched(accessToken);
          })
          .catch(() => {
            // store.dispatch({ type: globalTypes.REFRESHING_TOKEN_ERROR });
            // store.dispatch({ type: authTypes.LOGOUT });
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

    return Promise.reject(error);
  }
);

export default superaxios;
