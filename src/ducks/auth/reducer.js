import * as types from './types';

import { getFromLocalState } from '@services/ls';
/* shape

		data: {
			userName,
			email,
			phoneNumber,
			emailConfirmed,
			phoneNumberConfirmed
		},
		tokens: {
			accessToken,
			accessTokenExpires,
			refreshToken
		},
		loading,
		errors,
		code

*/

const initialState = {
  data: {
    user: getFromLocalState('USER'),
    token: {
      accessToken: getFromLocalState('ACCESS_TOKEN'),
      refreshToken: getFromLocalState('REFRESH_TOKEN'),
    },
  },
  loading: false,
  errors: [],
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_WITH_EMAIL_REQUEST:
    case types.SIGNUP_WITH_GOOGLE_REQUEST:
    case types.LOGIN_IN_WITH_EMAIL_REQUEST:
    case types.LOGIN_IN_WITH_GOOGLE_REQUEST:
      return { ...state, loading: true };
    case types.SIGNUP_WITH_EMAIL_SUCCESS:
    case types.SIGNUP_WITH_GOOGLE_SUCCESS:
    case types.LOGIN_IN_WITH_EMAIL_SUCCESS:
    case types.LOGIN_IN_WITH_GOOGLE_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }
    case types.SIGNUP_WITH_EMAIL_ERROR:
    case types.SIGNUP_WITH_GOOGLE_ERROR:
    case types.LOGIN_IN_WITH_EMAIL_ERROR:
    case types.LOGIN_IN_WITH_GOOGLE_ERROR:
      return { ...state, loading: false, errors: action.payload };
    case types.LOGOUT_REQUEST:
      return { ...state, loading: false, errors: action.payload };
    default:
      return state;
  }
}
