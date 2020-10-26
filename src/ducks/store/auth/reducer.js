import { getFromLocalState } from '@services/ls';
import { LS_KEYS } from '@config';

import * as types from './types';

const stateModel = {
  namespace: 'auth',

  state: {
    authInfo: {
      accessToken: getFromLocalState(LS_KEYS.ACCESS_TOKEN),
      accessTokenExpire: getFromLocalState(LS_KEYS.ACCESS_TOKEN_EXPIRE),
      refreshToken: getFromLocalState(LS_KEYS.REFRESH_TOKEN),
    },
    user: {},
    errors: [],
  },

  reducer: (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.SET_AUTH_INFO:
        return {
          ...state,
          authInfo: payload,
        };
      case types.CLEAR_AUTH_INFO:
        return {
          ...state,
          authInfo: {
            accessToken: null,
            accessTokenExpire: null,
            refreshToken: null,
          },
        };
      default:
        return state;
    }
  },
};

export { stateModel as authStateModel };
