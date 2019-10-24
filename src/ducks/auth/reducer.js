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
  registrationStep: getFromLocalState('REGISTER_STEP'),
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_WITH_EMAIL_REQUEST:
    case types.SIGNUP_WITH_GOOGLE_REQUEST:
    case types.LOGIN_IN_WITH_EMAIL_REQUEST:
    case types.LOGIN_IN_WITH_GOOGLE_REQUEST:
    case types.CONFIRM_EMAIL_REQUEST:
    case types.SET_USER_NAME_REQUEST:
    case types.SET_COMPANY_NAME_REQUEST:
    case types.SET_TEAM_REQUEST:
      return { ...state, loading: true };
    case types.SIGNUP_WITH_EMAIL_SUCCESS:
    case types.SIGNUP_WITH_GOOGLE_SUCCESS:
    case types.LOGIN_IN_WITH_EMAIL_SUCCESS:
    case types.LOGIN_IN_WITH_GOOGLE_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }
    case types.CONFIRM_EMAIL_SUCCESS:
    case types.SET_USER_NAME_SUCCESS:
    case types.SET_COMPANY_NAME_SUCCESS:
    case types.SET_TEAM_SUCCESS:
      return { ...state, loading: false };
    case types.SIGNUP_WITH_EMAIL_ERROR:
    case types.SIGNUP_WITH_GOOGLE_ERROR:
    case types.LOGIN_IN_WITH_EMAIL_ERROR:
    case types.LOGIN_IN_WITH_GOOGLE_ERROR:
    case types.CONFIRM_EMAIL_ERROR:
    case types.SET_USER_NAME_ERROR:
    case types.SET_COMPANY_NAME_ERROR:
    case types.SET_TEAM_ERROR:
      return { ...state, loading: false, errors: action.payload };
    // case types.LOGOUT_REQUEST:
    //   return { ...state, loading: false, errors: action.payload };
    default:
      return state;
  }
}
