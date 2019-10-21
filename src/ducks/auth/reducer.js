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
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_WITH_EMAIL_REQUEST:
      return { ...state, loading: true };

      // case types.SIGNUP_WITH_EMAIL_SUCCESS: {
      //   const { data } = action.payload;
      //   return { ...state, data, loading: false };
      // }

      // case types.SIGNUP_WITH_EMAIL_ERROR:
      //   return { ...state, loading: false, errors: action.payload };

    case types.SIGNUP_WITH_EMAIL_SUCCESS: {
      return { ...state, errors: action.payload, loading: false };
    }

    default:
      return state;
  }
}
