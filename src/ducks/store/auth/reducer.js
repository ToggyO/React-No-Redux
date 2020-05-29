import { getFromLocalState } from '@services/ls';
import { LS_KEYS } from '@config';

const stateModel = {
  auth: {
    authInfo: {
      accessToken: getFromLocalState(LS_KEYS.ACCESS_TOKEN),
      accessTokenExpire: getFromLocalState(LS_KEYS.ACCESS_TOKEN_EXPIRE),
      refreshToken: getFromLocalState(LS_KEYS.REFRESH_TOKEN),
    },
    user: {},
    errors: [],
  },
};

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 1:
      return state;
    default:
      return state;
  }
};

export { reducer as authReducer, stateModel as authStateModel };
