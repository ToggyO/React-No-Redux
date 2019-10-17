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
    tokens: {
      accessToken: getFromLocalState('ACCESS_TOKEN'),
      refreshToken: getFromLocalState('REFRESH_TOKEN'),
    },
  },
  loading: false,
  errors: {},
  code: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
    case types.SIGNIN_REQUEST:
      return { ...state, loading: true, code: null };

    case types.SIGNUP_SUCCESS:
    case types.SIGNIN_SUCCESS: {
      const { data, code } = action.payload;
      return { ...state, data, loading: false, code };
    }

    case types.SIGNUP_ERROR:
    case types.SIGNIN_ERROR:
      return { ...state, loading: false, errors: action.payload };

    default:
      return state;
  }
}
