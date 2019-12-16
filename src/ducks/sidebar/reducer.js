// import * as types from './types';
//
// import { getFromSessionState } from '@services/ss';
//
// import { getFromLocalState } from '@services/ls';
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
  data: {},
  loading: false,
  errors: [],
  extra: '',
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    // case types.SIGNUP_WITH_EMAIL_REQUEST:
    //   return { ...state, loading: true };
    // case types.LOGIN_IN_WITH_GOOGLE_REMEMBER_ME_SUCCESS: {
    //   const { data } = action.payload;
    //   return { ...state, data, loading: false };
    // }
    // case types.RESTORE_PASSWORD_SUCCESS:
    //   return { ...state, loading: false, extra: action.payload };
    // case types.CONFIRM_EMAIL_SUCCESS:
    // case types.REGISTRATION_DONE_SUCCESS: {
    //   const { data } = action.payload;
    //   return { ...state, loading: false, data: { ...state.data, registrationStep: data.registrationStep } };
    // }
    // case types.REFRESHING_TOKEN_SUCCESS:
    // case types.AUTH_PRELOADER_STOP:
    //   return { ...state, loading: false };
    // case types.REFRESHING_TOKEN_ERROR:
    //   return { ...state, loading: false, errors: action.payload };
    // case types.CLEAR_STORE_ERRORS:
    //   return { ...state, errors: [] };
    // case types.CLEAR_EXTRA:
    //   return { ...state, extra: '' };
    default:
      return state;
  }
}
