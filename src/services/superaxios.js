// gist https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c

import axios from 'axios';
import { globalTypes } from '@ducks/_global';
import * as ls from './ls';
import { API_DOMAIN } from '@constants';
import { store } from '../store';

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(accesstoken) {
  subscribers = subscribers.filter(callback => callback(accesstoken));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

const superaxios = axios.create({
  baseURL: process.env.API_URL,
});

superaxios.interceptors.request.use(config => {
  const accessToken = Cookies.get('bdtoken');

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
        const oldRefreshToken = Cookies.get('bdrefreshtoken');
        store.dispatch({ type: globalTypes.REFRESHING_TOKEN_REQUEST });
        superaxios
          .put('/token', { refreshToken: oldRefreshToken })
          .then(response => {
            store.dispatch({ type: globalTypes.REFRESHING_TOKEN_SUCCESS });
            const { accessToken, refreshToken } = response.data.data;
            Cookies.set('bdtoken', accessToken);
            Cookies.set('bdrefreshtoken', refreshToken);
            isAlreadyFetchingAccessToken = false;
            onAccessTokenFetched(accessToken);
          })
          .catch(() => {
            store.dispatch({ type: globalTypes.REFRESHING_TOKEN_ERROR });
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

    // if (status === 500) {
    //   store.dispatch({ type: authTypes.LOGOUT });
    // }

    return Promise.reject(error);
  },
);

export default superaxios;
