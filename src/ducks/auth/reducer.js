import * as types from './types';

import { getFromSessionState } from '@services/ss';

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
    user: getFromLocalState('USER') || getFromSessionState('USER'),
    token: {
      accessToken: getFromLocalState('ACCESS_TOKEN') || getFromSessionState('ACCESS_TOKEN'),
      refreshToken: getFromLocalState('REFRESH_TOKEN') || getFromSessionState('REFRESH_TOKEN'),
    },
    registrationStep: getFromLocalState('REGISTER_STEP') ||
      getFromSessionState('REGISTER_STEP') || { step: 0, stepName: '' },
  },
  loading: false,
  errors: [],
  extra: '',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_WITH_EMAIL_REQUEST:
    case types.SIGNUP_WITH_GOOGLE_REQUEST:
    case types.LOGIN_IN_WITH_EMAIL_REQUEST:
    case types.LOGIN_IN_WITH_GOOGLE_REQUEST:
    case types.CONFIRM_EMAIL_REQUEST:
    case types.SEND_NEW_CODE_REQUEST:
    case types.SET_USER_NAME_REQUEST:
    case types.SET_COMPANY_NAME_REQUEST:
    case types.SET_TEAM_REQUEST:
    case types.SET_FIRST_PROJECT_REQUEST:
    case types.REGISTRATION_DONE_REQUEST:
    case types.RESTORE_PASSWORD_REQUEST:
    case types.SET_PASSWORD_INVITE_REQUEST:
    case types.SET_NEW_PASSWORD_REQUEST:
    case types.REFRESHING_TOKEN_REQUEST:
    case types.AUTH_PRELOADER_START:
      return { ...state, loading: true };
    case types.SIGNUP_WITH_EMAIL_SUCCESS:
    case types.SIGNUP_WITH_GOOGLE_SUCCESS:
    case types.LOGIN_IN_WITH_EMAIL_SUCCESS:
    case types.LOGIN_IN_WITH_EMAIL_REMEMBER_ME_SUCCESS:
    case types.LOGIN_IN_WITH_GOOGLE_SUCCESS:
    case types.SET_PASSWORD_INVITE_SUCCESS:
    case types.LOGIN_IN_WITH_GOOGLE_REMEMBER_ME_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }
    case types.SEND_NEW_CODE_SUCCESS:
    case types.RESTORE_PASSWORD_SUCCESS:
      return { ...state, loading: false, extra: action.payload };
    case types.CONFIRM_EMAIL_SUCCESS:
    case types.SET_USER_NAME_SUCCESS:
    case types.SET_COMPANY_NAME_SUCCESS:
    case types.SET_TEAM_SUCCESS:
    case types.SET_FIRST_PROJECT_SUCCESS:
    case types.REGISTRATION_DONE_SUCCESS: {
      const { data } = action.payload;
      return { ...state, loading: false, data: { ...state.data, registrationStep: data.registrationStep } };
    }
    case types.SET_NEW_PASSWORD_SUCCESS:
    case types.REFRESHING_TOKEN_SUCCESS:
    case types.AUTH_PRELOADER_STOP:
      return { ...state, loading: false };
    case types.SIGNUP_WITH_EMAIL_ERROR:
    case types.SIGNUP_WITH_GOOGLE_ERROR:
    case types.LOGIN_IN_WITH_EMAIL_ERROR:
    case types.LOGIN_IN_WITH_GOOGLE_ERROR:
    case types.CONFIRM_EMAIL_ERROR:
    case types.SEND_NEW_CODE_ERROR:
    case types.SET_USER_NAME_ERROR:
    case types.SET_COMPANY_NAME_ERROR:
    case types.SET_TEAM_ERROR:
    case types.SET_FIRST_PROJECT_ERROR:
    case types.REGISTRATION_DONE_ERROR:
    case types.RESTORE_PASSWORD_ERROR:
    case types.SET_PASSWORD_INVITE_ERROR:
    case types.SET_NEW_PASSWORD_ERROR:
    case types.REFRESHING_TOKEN_ERROR:
      return { ...state, loading: false, errors: action.payload };
    case types.CLEAR_STORE_ERRORS:
      return { ...state, errors: [] };
    case types.CLEAR_EXTRA:
      return { ...state, extra: '' };
    default:
      return state;
  }
}
